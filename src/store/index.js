import { createStore } from "vuex";

const store = createStore({
  state: {
    point: 0,
  },
  mutations: {
    updatePoint(state, payload) {
      state.point += payload;
    },
  },
});

export default store;
