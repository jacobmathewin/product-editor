import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        products: []
    },
    mutations: {
        initializeStore(currentState) {
            if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(currentState, JSON.parse(localStorage.getItem('store')))
				);
			}
        },
        addNewProduct(currentState, product) {
            currentState.products.push(product);
        },
        deleteProduct(currentState, id) {
            let index = currentState.products.findIndex(p => id == p.id);
            currentState.products.splice(index, 1);
        },
        updateProduct(currentState, product) {
            let index = currentState.products.findIndex(p => product.id == p.id);
            console.log(index);
        }
    },
    getters: {
        nextProductID(state) {
            let nextID = 0;
            state.products.forEach((p)=>{
                if(p.id>=nextID) {
                    nextID = p.id + 1;
                }
            });
            return nextID;
        }
    },
    actions: {
    }
})