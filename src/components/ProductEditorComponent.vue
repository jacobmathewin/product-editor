<template>
    <div class="p-3 text-center">
        <template v-if="mode!=''">
            <h3>{{ editorHeader }}</h3>
            <div class="row p-2">
                <div class="col-4 text-right">Name</div>
                <div class="col-6"><input type="text" v-model="product.name"></div>
            </div>
            <div class="row p-2">
                <div class="col-4 text-right">Price</div>
                <div class="col-6"><input type="text" v-model="product.price"></div>
            </div>
            <div class="row p-2">
                <div class="col-12 text-center">
                    <button class="btn btn-sm btn-primary" @click="saveOperation()">Save</button> &nbsp;
                    <button class="btn btn-sm btn-secondary" @click="cancelOperation()">Cancel</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>

// import { mapMutations } from 'vuex';

export default {
    data: function() {
        return {
            mode: '',
            product: {}
        }
    },
    inject: ['eventBus'],
    methods: {
        edit(product) {
            this.product = {};
            this.mode = 'edit';
            Object.assign(this.product, product);
        },
        cancelOperation() {
            this.mode = '';
            this.product = {};
        },
        saveOperation() {
            if(this.mode=='edit') {
                this.eventBus.$emit('saveProductChanges', this.product);
            } else {
                this.product.id = this.$store.getters.nextProductID;
                this.$store.commit("addNewProduct", this.product);
            }
            this.product = {};
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
        }
    },
    created() {
        this.eventBus.$on('editProduct', this.edit);
        this.eventBus.$on('addProduct', this.createProduct);
    }
}
</script>