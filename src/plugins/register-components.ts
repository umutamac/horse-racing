
import type { App } from "vue";

import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'

import TopBar from "../components/TopBar.vue";
import HorseList from "../components/HorseList.vue";
import RacePrograms from "../components/RacePrograms.vue";
import RaceResults from "../components/RaceResults.vue";
import RaceAnimation from "../components/RaceAnimation.vue";

declare module "vue" {
  export interface GlobalComponents {
    DocumentationIcon: typeof DocumentationIcon;
    ToolingIcon: typeof ToolingIcon;
    EcosystemIcon: typeof EcosystemIcon;
    CommunityIcon: typeof CommunityIcon;
    SupportIcon: typeof SupportIcon;

    TopBar: typeof TopBar;
    HorseList: typeof HorseList;
    RacePrograms: typeof RacePrograms;
    RaceResults: typeof RaceResults;
    RaceAnimation: typeof RaceAnimation;

  }
}

export const RegisterGlobalComponentsPlugin = {
  install(app: App<Element>) {
    app
      .component("DocumentationIcon", DocumentationIcon)
      .component("ToolingIcon", ToolingIcon)
      .component("EcosystemIcon", EcosystemIcon)
      .component("CommunityIcon", CommunityIcon)
      .component("SupportIcon", SupportIcon)

      .component("TopBar", TopBar)
      .component("HorseList", HorseList)
      .component("RacePrograms", RacePrograms)
      .component("RaceResults", RaceResults)
      .component("RaceAnimation", RaceAnimation)

  }
};
