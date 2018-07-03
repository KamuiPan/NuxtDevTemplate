import { db } from "../plugins/firebase";
var CircularJSON = require('circular-json-es6');

export const strict = false;

export const state = () =>( {
  all: [], dbs : []
});

// actions
export const actions = {
  async getAllProducts ({ commit }) {
    await  db.collection("products").get().then((querySnapshot) => {
      console.log("rai");
      commit('setProducts', querySnapshot);
    });
  }
};

// mutations
export const mutations = {
  setProducts (state, products) {
    
    state.all=products;
    
  }
};