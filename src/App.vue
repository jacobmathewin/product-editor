<template>
    <div id="app" class="row container-fluid m-0 p-0">
        <div class="col-6 m-0 p-0">
            <products-display />
        </div>
        <div class="col-6 m-0 p-0">
            <product-editor />
        </div>
    </div>
</template>

<script>

import ProductsDisplay from './components/ProductsDisplayComponent';
import ProductEditor from './components/ProductEditorComponent';

export default {
    name: 'App',
    components: {
        ProductsDisplay,
        ProductEditor
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>