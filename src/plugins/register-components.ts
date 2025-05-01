import type { App } from "vue";

import TopBar from "../components/TopBar.vue";
import HorseList from "../components/HorseList.vue";
import ProgramDetails from "../components/ProgramDetails.vue";
import RaceAnimation from "../components/RaceAnimation.vue";

declare module "vue" {
  export interface GlobalComponents {
    TopBar: typeof TopBar;
    HorseList: typeof HorseList;
    ProgramDetails: typeof ProgramDetails;
    RaceAnimation: typeof RaceAnimation;
  }
}

export const RegisterGlobalComponentsPlugin = {
  install(app: App<Element>) {
    app
      .component("TopBar", TopBar)
      .component("HorseList", HorseList)
      .component("ProgramDetails", ProgramDetails)
      .component("RaceAnimation", RaceAnimation);
  },
};
