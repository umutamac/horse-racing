import type { Horse, Status } from "@/types";
import { type InjectionKey } from "vue";
import { createStore, useStore as baseUseStore } from "vuex";

export interface State {
  horses: Horse[];
  status: Status;
}

export const store = createStore({
  state: (): State => ({
    horses: [],
    status: "paused",
  }),
  mutations: {
    setHorses(state: State, horses: Horse[]) {
      state.horses = horses;
    },
    setStatus(state: State, status: Status) {
      state.status = status;
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
    allHorses(state: State) {
      return state.horses;
    },
    getHorseById: (state: State) => (id: string) => {
      return state.horses.find(horse => horse.id === id);
    },
    // status(state : State) {
    //   return state.status;
    // },
  },
});

// Define injection key
export const key = Symbol() as InjectionKey<ReturnType<typeof createStore>>;

// store.ts
export function useStore() {
  return baseUseStore(key);
}
