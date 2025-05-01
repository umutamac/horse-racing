import type { App } from "vue";

import TopBar from "../components/TopBar.vue";
import HorseList from "../components/HorseList.vue";
// import RacePrograms from "../components/RacePrograms.vue";
// import RaceResults from "../components/RaceResults.vue";
import ProgramDetails from "../components/ProgramDetails.vue";
import RaceAnimation from "../components/RaceAnimation.vue";

declare module "vue" {
  export interface GlobalComponents {
    TopBar: typeof TopBar;
    HorseList: typeof HorseList;
    // RacePrograms: typeof RacePrograms;
    // RaceResults: typeof RaceResults;
    ProgramDetails: typeof ProgramDetails;
    RaceAnimation: typeof RaceAnimation;
  }
}

export const RegisterGlobalComponentsPlugin = {
  install(app: App<Element>) {
    app
      .component("TopBar", TopBar)
      .component("HorseList", HorseList)
      // .component("RacePrograms", RacePrograms)
      // .component("RaceResults", RaceResults)
      .component("ProgramDetails", ProgramDetails)
      .component("RaceAnimation", RaceAnimation);
  },
};
