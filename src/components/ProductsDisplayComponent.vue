<template>
    <div class="p-3">
        <h3>Products</h3>
        <table class="table table-striped table-bordered table-sm text-center">
            <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tr v-for="(p,i) in products" v-bind:key="p.id">
                <td>{{ i+1 }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.price }}</td>
                <td>
                    <a href="#" class="btn-sm btn-primary" @click="editProduct(p)">Edit</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            products: [{id:1, name:'iPhone 6S', price: 27500},
                        {id:10, name:'iPhone 10', price: 47500}]
        }
    },
    created() {
        console.log('will populate products');
    },
    inject: ['eventBus'],
    methods: {
        editProduct(p) {
            this.eventBus.$emit('editProduct', p);
        }
    }
}
</script>