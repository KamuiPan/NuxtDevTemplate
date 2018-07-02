import { db } from "../plugins/firebase";
var CircularJSON = require('circular-json-es6');


export const state = () =>( {
  all: []
});

// actions
export const actions = {
  getAllProducts ({ commit }) {
    var p =  db.collection("products");
    

    commit('setProducts', CircularJSON.stringify(p));
  }
};

// mutations
export const mutations = {
  setProducts (state, products) {
    //console.log(products);
    state.all = products;
  }
};