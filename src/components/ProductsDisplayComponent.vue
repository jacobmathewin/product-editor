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
                    <a href="#" class="btn btn-sm btn-outline-primary" @click="editProduct(p)">
                        <font-awesome-icon :icon="['fas', 'edit']" />    
                        Edit
                    </a> 
                    <a href="#" class="btn btn-sm btn-outline-danger ml-2" @click="deleteProduct(p.id)">
                        <font-awesome-icon :icon="['fas', 'trash']" />    
                        Delete
                    </a>
                </td>
            </tr>
        </table>
        <br />
        <button class="btn btn-sm btn-outline-primary" @click="addProduct()">
            <font-awesome-icon :icon="['fas', 'plus']" />
            Add Product
        </button>
    </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    components: {
        
    },
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