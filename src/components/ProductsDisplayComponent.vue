<template>
    <div class="p-3 text-center">
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
                <td class="text-left">{{ p.name }}</td>
                <td class="text-right">{{ p.price }}</td>
                <td>
                    <a href="#" class="btn-sm btn-primary" @click="editProduct(p)">Edit</a> 
                    <a href="#" class="btn-sm btn-outline-danger ml-2" @click="deleteProduct(p.id)">Delete</a>
                </td>
            </tr>
        </table>
        <br />
        <button class="btn btn-sm btn-primary" @click="addProduct()">Add Product</button>
    </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    data: function() {
        return {

        }
    },
    created() {

    },
    computed: {
        ...mapState(['products'])
    },
    inject: ['eventBus'],
    methods: {
        editProduct(p) {
            this.eventBus.$emit('editProduct', p);
        },
        addProduct() {
            this.eventBus.$emit('addProduct');
        },
        deleteProduct(id) {
            this.$store.commit('deleteProduct', id);
        }
    },
}
</script>