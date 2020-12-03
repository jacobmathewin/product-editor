<template>
    <div class="p-3">
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
                    <button class="btn-sm btn-primary">Save</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            mode: '',
            product: []
        }
    },
    inject: ['eventBus'],
    methods: {
        edit(product) {
            this.mode = 'edit';
            this.msg = `editing ${product.name}`;
            this.product = product;
        }
    },
    computed: {
        editorHeader() {
            if(this.mode=='edit')
                return 'Editing Product';
            else
                return '';
        }
    },
    created() {
        this.eventBus.$on('editProduct', this.edit)
    }
}
</script>