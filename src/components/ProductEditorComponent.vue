<template>
    <div class="p-3 text-center">
        <template v-if="mode!=''">
            <h3>{{ editorHeader }}</h3>
            <form action="#" method="get" @submit="saveOperation()">
                <div class="row p-2">
                    <div class="col-4 text-right">Name</div>
                    <div class="col-6"><input type="text" v-model="$v.product.name.$model" v-bind:class="inputClasses.name"></div>
                </div>
                <div class="row p-2">
                    <div class="col-4 text-right">Price</div>
                    <div class="col-6"><input type="text" v-model="$v.product.price.$model" v-bind:class="inputClasses.price"></div>
                </div>
                <div class="row p-2">
                    <div class="col-12 text-center">
                        <button class="btn btn-sm btn-outline-primary" type="submit">
                            <font-awesome-icon :icon="['fas', 'save']" /> Save
                        </button> &nbsp;
                        <button class="btn btn-sm btn-outline-secondary" @click="cancelOperation()">
                            <font-awesome-icon :icon="['fas', 'times-circle']" /> Cancel
                        </button>
                    </div>
                </div>
            </form>
        </template>
    </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';

export default {
    data: function() {
        return {
            mode: '',
            product: {}
        }
    },
    validations: {
        product: {
            name: { required },
            price: { required }
        }
    },
    inject: ['eventBus'],
    methods: {
        edit(product) {
            this.mode = 'edit';
            this.product = {};
            Object.assign(this.product, product);
        },
        cancelOperation() {
            this.mode = '';
            this.product = {};
        },
        saveOperation() {
            this.$v.$touch();
            console.log('save ...'+this.$v.$invalid);
            if(!this.$v.$invalid) {
                if(this.mode=='edit') {
                    this.$store.commit("updateProduct", this.product);
                } else {
                    this.product.id = this.$store.getters.nextProductID;
                    this.$store.commit("addNewProduct", this.product);
                }
                let oldMode = this.mode;
                this.mode = '';
                this.product = {};
            }
        },
        createProduct() {
            this.mode = 'create';
            this.product = {id:0, name:'', price:0};
        }
    },
    computed: {
        editorHeader() {
            if(this.mode=='edit')
                return 'Editing Product';
            else if(this.mode=='create')
                return 'Create Product';
            else
                return '';
        },
        inputClasses() {
            return {
                name: this.$v.product.name.$invalid ? ['invalid'] : [],
                price: this.$v.product.price.$invalid ? ['invalid'] : []
            }
        }
    },
    created() {
        this.eventBus.$on('editProduct', this.edit);
        this.eventBus.$on('addProduct', this.createProduct);
    }
}
</script>

<style scoped>
    .invalid {
        border: 1px solid red;
    }

    .invalid:focus {
        border: 1px solid red;
        outline: red;
    }
</style>