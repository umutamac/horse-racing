import type { Horse } from "@/types";
// import { type InjectionKey } from 'vue'
import { createStore } from "vuex";
// import type { Store } from 'vuex';

export interface State {
  count: number;
  horses: Horse[];
}

// Define injection key
// export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: (): State => ({
    count: 0,
    horses: [],
  }),
  mutations: {
    increment(state: State) {
      state.count++;
    },
    setHorses(state: State, horses: Horse[]) {
      state.horses = horses;
    },
  },
  actions: {
    // incrementAsync({ commit }) {
    //     setTimeout(() => {
    //         commit('increment')
    //     }, 1000)
    // }
  },
  getters: {
    doubleCount: (state: State) => state.count * 2,

    allHorses(state: State) {
      return state.horses;
    },
    getHorseById: (state: State) => (id: string) => {
      return state.horses.find(horse => horse.id === id);
    },
  },
});
