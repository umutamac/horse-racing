
import type { App } from "vue";

import HelloWorld from "../components/HelloWorld.vue";
import TheWelcome from "../components/TheWelcome.vue";
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'

import HorseList from "../components/HorseList.vue";
import TopBar from "../components/TopBar.vue";
import RacePrograms from "../components/RacePrograms.vue";
import RaceResults from "../components/RaceResults.vue";
import LapList from "../components/LapList.vue";
import RaceAnimation from "../components/RaceAnimation.vue";

declare module "vue" {
  export interface GlobalComponents {
    HelloWorld: typeof HelloWorld;
    TheWelcome: typeof TheWelcome;
    WelcomeItem: typeof WelcomeItem;
    DocumentationIcon: typeof DocumentationIcon;
    ToolingIcon: typeof ToolingIcon;
    EcosystemIcon: typeof EcosystemIcon;
    CommunityIcon: typeof CommunityIcon;
    SupportIcon: typeof SupportIcon;

    HorseList: typeof HorseList;
    TopBar: typeof TopBar;
    RacePrograms: typeof RacePrograms;
    RaceResults: typeof RaceResults;
    LapList: typeof LapList;
    RaceAnimation: typeof RaceAnimation;

  }
}

export const RegisterGlobalComponentsPlugin = {
  install(app: App<Element>) {
    app
        .component("HelloWorld", HelloWorld)
        .component("TheWelcome", TheWelcome)
        .component("WelcomeItem", WelcomeItem)
        .component("DocumentationIcon", DocumentationIcon)
        .component("ToolingIcon", ToolingIcon)
        .component("EcosystemIcon", EcosystemIcon)
        .component("CommunityIcon", CommunityIcon)
        .component("SupportIcon", SupportIcon)

        .component("HorseList", HorseList)
        .component("TopBar", TopBar)
        .component("RacePrograms", RacePrograms)
        .component("RaceResults", RaceResults)
        .component("LapList", LapList)
        .component("RaceAnimation", RaceAnimation)

      
  }
};

// export declare namespace GlobalComponents {
//   // Custom data source
//   export type ZetInteractionInjector = InstanceType<typeof ZetInteractionInjector>;
//   export type ZetLmsAppBar = InstanceType<typeof ZetLmsAppBar>;
//   export type ZetLmsNavigationDrawerLeft = InstanceType<typeof ZetLmsNavigationDrawerLeft>;
//   export type ZetCarouselWithControl = InstanceType<typeof ZetCarouselWithControl>;
//   export type ZetBackButton = InstanceType<typeof ZetBackButton>;
//   export type ZetIfAllowed = InstanceType<typeof ZetIfAllowed>;
//   export type ZetDebug = InstanceType<typeof ZetDebug>;
//   export type ZetTag = InstanceType<typeof ZetTag>;
//   export type ZetSelectTag = InstanceType<typeof ZetSelectTag>;
//   export type ZetChipBubble = InstanceType<typeof ZetChipBubble>;
//   export type ZetRichTooltip = InstanceType<typeof ZetRichTooltip>;
//   export type ZetEditTags = InstanceType<typeof ZetEditTags>;
//   export type ZetTagManager = InstanceType<typeof ZetTagManager>;
//   export type ZetAdministerTagSelection = InstanceType<typeof ZetAdministerTagSelection>;
//   export type ZetEditTagSelection = InstanceType<typeof ZetEditTagSelection>;
//   export type ZetEditState = InstanceType<typeof ZetEditState>;
//   export type ZetTagSelection = InstanceType<typeof ZetTagSelection>;
//   export type ZetTagMap = InstanceType<typeof ZetTagMap>;
//   export type ZetJsonViewer = InstanceType<typeof ZetJsonViewer>;
//   export type ZetInfoboxDialog = InstanceType<typeof ZetInfoboxDialog>;
//   export type ZetProgressBar = InstanceType<typeof ZetProgressBar>;
//   export type ZetErrorAlert = InstanceType<typeof ZetErrorAlert>;
//   export type ZetLoadingDialog = InstanceType<typeof ZetLoadingDialog>;
//   export type ZetDisplayZerr = InstanceType<typeof ZetDisplayZerr>;
//   export type ZetDisplayError = InstanceType<typeof ZetDisplayError>;
//   export type ZetDisplayZodError = InstanceType<typeof ZetDisplayZodError>;
//   export type ZetDisplayMcqParseError = InstanceType<typeof ZetDisplayMcqParseError>;
//   export type ZetDisplayMatchQuestionParseError = InstanceType<typeof ZetDisplayMatchQuestionParseError>;
//   export type ZetDisplayUserError = InstanceType<typeof ZetDisplayUserError>;
//   export type ZetSnackbar = InstanceType<typeof ZetSnackbar>;
//   export type ZetUserError = InstanceType<typeof ZetUserError>;
//   export type ZetEditUser = InstanceType<typeof ZetEditUser>;
//   export type ZetEditUserRoleMap = InstanceType<typeof ZetEditUserRoleMap>;
//   export type ZetEditLabels = InstanceType<typeof ZetEditLabels>;
//   export type ZetSelectNestedFolders = InstanceType<typeof ZetSelectNestedFolders>;
//   export type ZetEditNestedFolders = InstanceType<typeof ZetEditNestedFolders>;
//   export type ZetExpander = InstanceType<typeof ZetExpander>;
//   export type ZetSelectableNestedFolder = InstanceType<typeof ZetSelectableNestedFolder>;
//   export type ZetUserStats = InstanceType<typeof ZetUserStats>;
//   export type ZetDisplayUserRoles = InstanceType<typeof ZetDisplayUserRoles>;
//   export type ZetImportUsers = InstanceType<typeof ZetImportUsers>;
//   export type ZetEditPermission = InstanceType<typeof ZetEditPermission>;
//   export type ZetEditTaskPermission = InstanceType<typeof ZetEditTaskPermission>;
//   export type ZetSystemError = InstanceType<typeof ZetSystemError>;
//   export type ZetRegularError = InstanceType<typeof ZetRegularError>;
//   export type ZetAnyError = InstanceType<typeof ZetAnyError>;
//   export type ZetDialoger = InstanceType<typeof ZetDialoger>;
//   export type ZetCropper = InstanceType<typeof ZetCropper>;
//   export type ZetColorCircle = InstanceType<typeof ZetColorCircle>;
//   export type ZetEditColor = InstanceType<typeof ZetEditColor>;
//   export type ZetEditImageURL = InstanceType<typeof ZetEditImageURL>;
//   export type ZetListUserBatches = InstanceType<typeof ZetListUserBatches>;
//   export type ZetImportSelectFile = InstanceType<typeof ZetImportSelectFile>;
//   export type ZetEditOrganizationSignin = InstanceType<typeof ZetEditOrganizationSignin>;
//   export type ZetOpen = InstanceType<typeof ZetOpen>;
//   export type ZetClickCopy = InstanceType<typeof ZetClickCopy>;
//   export type ZetFeedPagination = InstanceType<typeof ZetFeedPagination>;
//   export type ZetDataTableExtension = InstanceType<typeof ZetDataTableExtension>;
//   export type ZetNotificationAlert = InstanceType<typeof ZetNotificationAlert>;
//   export type ZetEditEmailList = InstanceType<typeof ZetEditEmailList>;
//   export type ZetConfirm = InstanceType<typeof ZetConfirm>;
//   export type ZetEditOffering = InstanceType<typeof ZetEditOffering>;
//   export type ZetEditPercentage = InstanceType<typeof ZetEditPercentage>;
//   export type ZetBarcode = InstanceType<typeof ZetBarcode>;
//   export type ZetQrCode = InstanceType<typeof ZetQrCode>;
//   export type ZetEditQuestionDeliveryConfiguration = InstanceType<typeof ZetEditQuestionDeliveryConfiguration>;
//   export type ZetGcUpload = InstanceType<typeof ZetGCUpload>;
//   export type ZetImportTicketsByFile = InstanceType<typeof ZetImportTicketsByFile>;
//   export type ZetNumericInputer = InstanceType<typeof ZetNumericInputer>;
//   export type ZetTableDataCreator = InstanceType<typeof ZetTableDataCreator>;
//   export type ZetTabularInputer = InstanceType<typeof ZetTabularInputer>;
//   export type ZetDisplayHint = InstanceType<typeof ZetDisplayHint>;
//   export type ZetPhotoTaker = InstanceType<typeof ZetPhotoTaker>;
//   export type ZetEditUploadUrl = InstanceType<typeof ZetEditUploadUrl>;
//   export type ZetShowIf = InstanceType<typeof ZetShowIf>;
//   export type ZetAudioRecorder = InstanceType<typeof ZetAudioRecorder>;
//   export type ZetVideoRecorder = InstanceType<typeof ZetVideoRecorder>;
//   export type ZetShowDateTime = InstanceType<typeof ZetShowDateTime>;
//   export type ZetPickDimensions = InstanceType<typeof ZetPickDimensions>;
//   export type ZetEditGridDisplay = InstanceType<typeof ZetEditGridDisplay>;
//   export type ZetEditMultipleChoiceQuestionDisplay = InstanceType<typeof ZetEditMultipleChoiceQuestionDisplay>;
//   export type ZetEditFlexDisplay = InstanceType<typeof ZetEditFlexDisplay>;
//   export type ZetDisplayTalentTestItemDetails = InstanceType<typeof ZetDisplayTalentTestItemDetails>;
//   export type ZetEditTalentLibraryPositioningCategoryMatches = InstanceType<typeof ZetEditTalentLibraryPositioningCategoryMatches>;
//   export type ZetEditTalentLibraryPositioningLevel = InstanceType<typeof ZetEditTalentLibraryPositioningLevel>;
//   export type ZetEditTalentLibraryPositioningTypes = InstanceType<typeof ZetEditTalentLibraryPositioningTypes>;
//   export type ZetListFilteredTalentTestItems = InstanceType<typeof ZetListFilteredTalentTestItems>;
//   export type ZetListTalentTestItems = InstanceType<typeof ZetListTalentTestItems>;
//   export type ZetToggleTalentLibraryCategoryItem = InstanceType<typeof ZetToggleTalentLibraryCategoryItem>;
//   export type ZetListRecruitmentTestItems = InstanceType<typeof ZetListRecruitmentTestItems>;
//   export type ZetEditAccountProfile = InstanceType<typeof ZetEditAccountProfile>;
//   export type ZetDeleteAccount = InstanceType<typeof ZetDeleteAccount>;
//   export type ZetEditDropdownDisplay = InstanceType<typeof ZetEditDropdownDisplay>;
//   export type ZetDisplayResultNotes = InstanceType<typeof ZetDisplayResultNotes>;
//   export type ZetScientificCalculator = InstanceType<typeof ZetScientificCalculator>;

//   export type ZetListTestItems = InstanceType<typeof ZetListTestItems>;
//   export type ZetDisplayResultLabels = InstanceType<typeof ZetDisplayResultLabels>;
//   export type ZetDisplayAppliedInterpretations = InstanceType<typeof ZetDisplayAppliedInterpretations>;
//   export type ZetToggleTalentTestBankCategorySelection = InstanceType<typeof ZetToggleTalentTestBankCategorySelection>;
//   export type ZetAdministerSteps = InstanceType<typeof ZetAdministerSteps>;
//   export type ZetConfigureStep = InstanceType<typeof ZetConfigureStep>;
//   export type ZetConfigureTaskSteps = InstanceType<typeof ZetConfigureTaskSteps>;
//   export type ZetEditPreStartDocumentSetting = InstanceType<typeof ZetEditPreStartDocumentSetting>;
//   export type ZetEditComparison = InstanceType<typeof ZetEditComparison>;
//   export type ZetEditTaskProgramMembership = InstanceType<typeof ZetEditTaskProgramMembership>;
//   export type ZetEditTaskProgramPointers = InstanceType<typeof ZetEditTaskProgramPointers>;
//   export type ZetEditStepStageSettings = InstanceType<typeof ZetEditStepStageSettings>;
//   export type ZetAdministerRecruitmentTestBankSelection = InstanceType<typeof ZetAdministerRecruitmentTestBankSelection>;
//   export type ZetDisplayRecruitmentTestItemDetails = InstanceType<typeof ZetDisplayRecruitmentTestItemDetails>;
//   export type ZetEditQuestionPackProduct = InstanceType<typeof ZetEditQuestionPackProduct>;
//   export type ZetEditOrganizationAPIRole = InstanceType<typeof ZetEditOrganizationAPIRole>;
//   export type ZetEditOrganizationConsentItem = InstanceType<typeof ZetEditOrganizationConsentItem>;
//   export type ZetEditOrganizationNotificationCheckCredits = InstanceType<typeof ZetEditOrganizationNotificationCheckCredits>;
//   export type ZetEditOrganizationNotificationCheckSystemCredits = InstanceType<typeof ZetEditOrganizationNotificationCheckSystemCredits>;
//   export type ZetEditOrganizationNotificationCheckTestCredits = InstanceType<typeof ZetEditOrganizationNotificationCheckTestCredits>;
//   export type ZetListOrganizationNotificationCheckTestCredits = InstanceType<typeof ZetListOrganizationNotificationCheckTestCredits>;
//   export type ZetOrganizationBilling = InstanceType<typeof ZetOrganizationBilling>;
//   export type ZetEditProductAdministration = InstanceType<typeof ZetEditProductAdministration>;
//   export type ZetEditProductProfile = InstanceType<typeof ZetEditProductProfile>;
//   export type ZetEditTestProduct = InstanceType<typeof ZetEditTestProduct>;
//   export type ZetInitializeTestProductBalance = InstanceType<typeof ZetInitializeTestProductBalance>;
//   export type ZetTestProductInventory = InstanceType<typeof ZetTestProductInventory>;
//   export type ZetSelectOrganization = InstanceType<typeof ZetSelectOrganization>;
//   export type ZetAddAllocation = InstanceType<typeof ZetAddAllocation>;
//   export type ZetSelectTestProduct = InstanceType<typeof ZetSelectTestProduct>;
 
//   export type ZetSelectFromMyTests = InstanceType<typeof ZetSelectFromMyTests>;
//   export type ZetOfferingSelector = InstanceType<typeof ZetOfferingSelector>;
//   export type ZetToolTip = InstanceType<typeof ZetToolTip>;
//   export type ZetChip = InstanceType<typeof ZetChip>;
//   export type ZetDisplayValuePointer = InstanceType<typeof ZetDisplayValuePointer>;
//   export type ZetDisplayValueRange = InstanceType<typeof ZetDisplayValueRange>;
//   export type ZetEditClassifierPassFail = InstanceType<typeof ZetEditClassifierPassFail>;
//   export type ZetEditClassifierSegmented = InstanceType<typeof ZetEditClassifierSegmented>;
//   export type ZetEditConfigDescriptor = InstanceType<typeof ZetEditConfigDescriptor>;
//   export type ZetSelectTask = InstanceType<typeof ZetSelectTask>;
//   export type ZetPreviewSample = InstanceType<typeof ZetPreviewSample>;
//   export type ZetTrialTests = InstanceType<typeof ZetTrialTests>;
//   export type ZetTestMarketplace = InstanceType<typeof ZetTestMarketplace>;
//   export type ZetLocale = InstanceType<typeof ZetLocale>;
//   export type ZetEditUnlimitableNumber = InstanceType<typeof ZetEditUnlimitableNumber>;
 
//   export type ZetEditQuestionPack = InstanceType<typeof ZetEditQuestionPack>;
//   export type ZetQuestion = InstanceType<typeof ZetQuestion>;
//   export type ZetInputQuestion = InstanceType<typeof ZetInputQuestion>;
//   export type ZetQuestionInstance = InstanceType<typeof ZetQuestionInstance>;
//   export type ZetInputQuestionInstance = InstanceType<typeof ZetInputQuestionInstance>;
//   export type ZetContentGroups = InstanceType<typeof ZetContentGroups>;
//   export type ZetEditContentGroup = InstanceType<typeof ZetEditContentGroup>;
//   export type ZetEditContentGroupItems = InstanceType<typeof ZetEditContentGroupItems>;
//   export type ZetQuestionPaginator = InstanceType<typeof ZetQuestionPaginator>;
//   export type ZetQuestionSelector = InstanceType<typeof ZetQuestionSelector>;
//   export type ZetSubscriptionSummary = InstanceType<typeof ZetSubscriptionSummary>;
//   export type ZetProfileMenu = InstanceType<typeof ZetProfileMenu>;
//   export type ZetEarnFreeCredits = InstanceType<typeof ZetEarnFreeCredits>;
//   export type ZetBalanceTransactions = InstanceType<typeof ZetBalanceTransactions>;
//   export type ZetDateIntervalSelector = InstanceType<typeof ZetDateIntervalSelector>;
//   export type ZetLabelListSummary = InstanceType<typeof ZetLabelListSummary>;
//   export type ZetEasyDateIntervalSelector = InstanceType<typeof ZetEasyDateIntervalSelector>;
//   export type ZetDemoPagesList = InstanceType<typeof ZetDemoPagesList>;
//   export type ZetTransactionReport = InstanceType<typeof ZetTransactionReport>;
//   export type ZetDisplayRequiredSystemCreditsCard = InstanceType<typeof ZetDisplayRequiredSystemCreditsCard>;
//   export type ZetDisplaySystemCreditTaskTriggerCausesCard = InstanceType<typeof ZetDisplaySystemCreditTaskTriggerCausesCard>;
//   export type ZetDisplaySystemCreditTriggerCausesCard = InstanceType<typeof ZetDisplaySystemCreditTriggerCausesCard>;
//   export type ZetBuyCredits = InstanceType<typeof ZetBuyCredits>;
//   export type ZetStripeForm = InstanceType<typeof ZetStripeForm>;
//   export type ZetOrganizationNotifications = InstanceType<typeof ZetOrganizationNotifications>;
//   export type ZetCreditsTestBalances = InstanceType<typeof ZetCreditsTestBalances>;
//   export type ZetEditOrganizationBilling = InstanceType<typeof ZetEditOrganizationBilling>;
//   export type ZetOrganizationPlanOverview = InstanceType<typeof ZetOrganizationPlanOverview>;
//   export type ZetOrganizationSubscription = InstanceType<typeof ZetOrganizationSubscription>;
//   export type ZetInfoMenu = InstanceType<typeof ZetInfoMenu>;
//   export type ZetTableTopBar = InstanceType<typeof ZetTableTopBar>;
//   export type ZetValidate = InstanceType<typeof ZetValidate>;
//   export type ZetEditUniversalDate = InstanceType<typeof ZetEditUniversalDate>;
//   export type ZetEditMonetizationPartners = InstanceType<typeof ZetEditMonetizationPartners>;
//   export type ZetListBalanceTransactions = InstanceType<typeof ZetListBalanceTransactions>;
//   export type ZetSelectBatchOptions = InstanceType<typeof ZetSelectBatchOptions>;
//   export type ZetChipDatePicker = InstanceType<typeof ZetChipDatePicker>;
//   export type ZetQuestionBankBrowser = InstanceType<typeof ZetQuestionBankBrowser>;
//   export type ZetQuestionBankDefinitions = InstanceType<typeof ZetQuestionBankDefinitions>;
//   export type ZetEditDefinitionBank = InstanceType<typeof ZetEditDefinitionBank>;
//   export type ZetEditTree = InstanceType<typeof ZetEditTree>;
//   export type ZetEditDimensionTreeItems = InstanceType<typeof ZetEditDimensionTreeItems>;
//   export type ZetEditDimensionTreeItem = InstanceType<typeof ZetEditDimensionTreeItem>;
//   export type ZetQuestionBankSchema = InstanceType<typeof ZetQuestionBankSchema>;
//   export type ZetEditQuestionBankSchema = InstanceType<typeof ZetEditQuestionBankSchema>;
//   export type ZetListQuestionBankSchemaFolders = InstanceType<typeof ZetListQuestionBankSchemaFolders>;
//   export type ZetQuestionBankSchemaFolderMenu = InstanceType<typeof ZetQuestionBankSchemaFolderMenu>;
//   export type ZetListQuestionBankSchemaFolderTags = InstanceType<typeof ZetListQuestionBankSchemaFolderTags>;
//   export type ZetQuestionBankSchemaTagMenu = InstanceType<typeof ZetQuestionBankSchemaTagMenu>;
//   export type ZetListQuestionBankSchemaFolderTagValues = InstanceType<typeof ZetListQuestionBankSchemaFolderTagValues>;
//   export type ZetAddQuestionnaireItem = InstanceType<typeof ZetAddQuestionnaireItem>;
//   export type ZetEditDimension = InstanceType<typeof ZetEditDimension>;
//   export type QuestionBankNavigator = InstanceType<typeof QuestionBankNavigator>;
//   export type ZetQuestionTagFilter = InstanceType<typeof ZetQuestionTagFilter>;
//   export type ZetQuestionDocList = InstanceType<typeof ZetQuestionDocList>;
//   export type ZetQuestionListItem = InstanceType<typeof ZetQuestionListItem>;
//   export type ZetMultipleChoiceQuestion = InstanceType<typeof ZetMultipleChoiceQuestion>;
//   export type ZetDisplayQuestionFeedback = InstanceType<typeof ZetDisplayQuestionFeedback>;
//   export type ZetMultipleChoiceQuestionInstance = InstanceType<typeof ZetMultipleChoiceQuestionInstance>;
//   export type ZetAsk = InstanceType<typeof ZetAsk>;
//   export type ZetEditQuestion = InstanceType<typeof ZetEditQuestion>;
//   export type ZetEditMultipleChoiceQuestion = InstanceType<typeof ZetEditMultipleChoiceQuestion>;
//   export type ZetEditMatchQuestion = InstanceType<typeof ZetEditMatchQuestion>;
//   export type ZetEditMatching = InstanceType<typeof ZetEditMatching>;
//   export type ZetEditMatchingItem = InstanceType<typeof ZetEditMatchingItem>;
//   export type ZetMatchQuestionInstance = InstanceType<typeof ZetMatchQuestionInstance>;
//   export type ZetMatchQuestion = InstanceType<typeof ZetMatchQuestion>;
//   export type ZetEditMatchingReportingName = InstanceType<typeof ZetEditMatchingReportingName>;
//   export type ZetEditMatchingConfiguration = InstanceType<typeof ZetEditMatchingConfiguration>;
//   export type ZetEditMatchingOption = InstanceType<typeof ZetEditMatchingOption>;
//   export type ZetEditMultipleChoice = InstanceType<typeof ZetEditMultipleChoice>;
//   export type ZetEditChoice = InstanceType<typeof ZetEditChoice>;
//   export type ZetAddEffect = InstanceType<typeof ZetAddEffect>;
//   export type ZetListEffects = InstanceType<typeof ZetListEffects>;
//   export type ZetAdministerEffects = InstanceType<typeof ZetAdministerEffects>;
//   export type ZetPasteMcq = InstanceType<typeof ZetPasteMcq>;
//   export type ZetEmailTemplateFields = InstanceType<typeof ZetEmailTemplateFields>;
//   export type ZetPasteMatchQuestion = InstanceType<typeof ZetPasteMatchQuestion>;
//   export type ZetMassUpdateQuestions = InstanceType<typeof ZetMassUpdateQuestions>;
//   export type ZetPreviewScore = InstanceType<typeof ZetPreviewScore>;
//   export type ZetEditDeed = InstanceType<typeof ZetEditDeed>;
//   export type ZetPickEffects = InstanceType<typeof ZetPickEffects>;
//   export type ZetListDefinitionBanks = InstanceType<typeof ZetListDefinitionBanks>;
//   export type ZetPathTable = InstanceType<typeof ZetPathTable>;
//   export type ZetEditRubricSettings = InstanceType<typeof ZetEditRubricSettings>;
//   export type ZetEditRubric = InstanceType<typeof ZetEditRubric>;
//   export type ZetRubricPreviewAndCustomize = InstanceType<typeof ZetRubricPreviewAndCustomize>;
//   export type ZetRubricPreviewSettings = InstanceType<typeof ZetRubricPreviewSettings>;
//   export type ZetRubricUtilityMenu = InstanceType<typeof ZetRubricUtilityMenu>;
//   export type ZetEditRubricPercentageCustomSelection = InstanceType<typeof ZetEditRubricPercentageCustomSelection>;
//   export type ZetEditCellPercentageCustomSelection = InstanceType<typeof ZetEditCellPercentageCustomSelection>;
//   export type ZetEditCriterionPercentageCustomSelection = InstanceType<typeof ZetEditCriterionPercentageCustomSelection>;
//   export type ZetFeedbackRubricPercentageCustomSelection = InstanceType<typeof ZetFeedbackRubricPercentageCustomSelection>;
//   export type ZetTestViewRubricPercentageCustomSelection = InstanceType<typeof ZetTestViewRubricPercentageCustomSelection>;
//   export type ZetUseRubricPercentageCustomSelection = InstanceType<typeof ZetUseRubricPercentageCustomSelection>;
//   export type ZetEditRubricPercentageInput = InstanceType<typeof ZetEditRubricPercentageInput>;
//   export type ZetEditCellPercentageInput = InstanceType<typeof ZetEditCellPercentageInput>;
//   export type ZetEditCriterionPercentageInput = InstanceType<typeof ZetEditCriterionPercentageInput>;
//   export type ZetEditHeadingPercentageInput = InstanceType<typeof ZetEditHeadingPercentageInput>;
//   export type ZetBatchEditCellValuePercentageInput = InstanceType<typeof ZetBatchEditCellValuePercentageInput>;
//   export type ZetFeedbackRubricPercentageInput = InstanceType<typeof ZetFeedbackRubricPercentageInput>;
//   export type ZetTestViewRubricPercentageInput = InstanceType<typeof ZetTestViewRubricPercentageInput>;
//   export type ZetUseRubricPercentageInput = InstanceType<typeof ZetUseRubricPercentageInput>;
//   export type ZetEditRubricPercentageIntervalInput = InstanceType<typeof ZetEditRubricPercentageIntervalInput>;
//   export type ZetEditCellPercentageIntervalInput = InstanceType<typeof ZetEditCellPercentageIntervalInput>;
//   export type ZetEditHeadingPercentageIntervalInput = InstanceType<typeof ZetEditHeadingPercentageIntervalInput>;
//   export type ZetEditCriterionPercentageIntervalInput = InstanceType<typeof ZetEditCriterionPercentageIntervalInput>;
//   export type ZetBatchEditCellValuePercentageIntervalInput = InstanceType<typeof ZetBatchEditCellValuePercentageIntervalInput>;
//   export type ZetFeedbackRubricPercentageIntervalInput = InstanceType<typeof ZetFeedbackRubricPercentageIntervalInput>;
//   export type ZetTestViewRubricPercentageIntervalInput = InstanceType<typeof ZetTestViewRubricPercentageIntervalInput>;
//   export type ZetUseRubricPercentageIntervalInput = InstanceType<typeof ZetUseRubricPercentageIntervalInput>;
//   export type ZetEditRubricPercentageSelection = InstanceType<typeof ZetEditRubricPercentageSelection>;
//   export type ZetEditCellPercentageSelection = InstanceType<typeof ZetEditCellPercentageSelection>;
//   export type ZetEditCriterionPercentageSelection = InstanceType<typeof ZetEditCriterionPercentageSelection>;
//   export type ZetEditHeadingPercentageSelection = InstanceType<typeof ZetEditHeadingPercentageSelection>;
//   export type ZetBatchEditCellValuePercentageSelection = InstanceType<typeof ZetBatchEditCellValuePercentageSelection>;
//   export type ZetFeedbackRubricPercentageSelection = InstanceType<typeof ZetFeedbackRubricPercentageSelection>;
//   export type ZetTestViewRubricPercentageSelection = InstanceType<typeof ZetTestViewRubricPercentageSelection>;
//   export type ZetUseRubricPercentageSelection = InstanceType<typeof ZetUseRubricPercentageSelection>;
//   export type ZetEditTypedValue = InstanceType<typeof ZetEditTypedValue>;
//   export type ZetMessageBox = InstanceType<typeof ZetMessageBox>;
//   export type ZetEditMultipleChoiceQuestionDisplayAndPreview = InstanceType<typeof ZetEditMultipleChoiceQuestionDisplayAndPreview>;
//   export type ZetManageQuestion = InstanceType<typeof ZetManageQuestion>;
//   export type ZetCreateQuestion = InstanceType<typeof ZetCreateQuestion>;
//   export type ZetQuestionBuilder = InstanceType<typeof ZetQuestionBuilder>;
//   export type ZetImportQuestions = InstanceType<typeof ZetImportQuestions>;
//   export type ZetEditInputQuestion = InstanceType<typeof ZetEditInputQuestion>;
//   export type ZetEditDirectory = InstanceType<typeof ZetEditDirectory>;
//   export type ZetQuestionDirectoryChip = InstanceType<typeof ZetQuestionDirectoryChip>;
//   export type ZetAdministerScoreTags = InstanceType<typeof ZetAdministerScoreTags>;
//   export type ZetAddScoringTag = InstanceType<typeof ZetAddScoringTag>;
//   export type ZetListScoringTags = InstanceType<typeof ZetListScoringTags>;
//   export type ZetEditScoring = InstanceType<typeof ZetEditScoring>;
//   export type ZetScoringChip = InstanceType<typeof ZetScoringChip>;
//   export type ZetEditTestCertificate = InstanceType<typeof ZetEditTestCertificate>;
//   export type ZetListTestCertificates = InstanceType<typeof ZetListTestCertificates>;
//   export type ZetEditTestAvailability = InstanceType<typeof ZetEditTestAvailability>;
//   export type ZetEditTestCondition = InstanceType<typeof ZetEditTestCondition>;
//   export type ZetDisplayTestCertificateResult = InstanceType<typeof ZetDisplayTestCertificateResult>;
//   export type ZetEditOrganizationApiAccess = InstanceType<typeof ZetEditOrganizationApiAccess>;
//   export type ZetAdministerInputQuestionValidation = InstanceType<typeof ZetAdministerInputQuestionValidation>;
//   export type ZetEditTextInputValidationRule = InstanceType<typeof ZetEditTextInputValidationRule>;
//   export type ZetAdministerInputQuestionEvaluationSettings = InstanceType<typeof ZetAdministerInputQuestionEvaluationSettings>;
//   export type ZetEditEvaluationNote = InstanceType<typeof ZetEditEvaluationNote>;
//   export type ZetAdministerInputQuestionNumericEvaluation = InstanceType<typeof ZetAdministerInputQuestionNumericEvaluation>;
//   export type ZetEditNumericEvaluator = InstanceType<typeof ZetEditNumericEvaluator>;
//   export type ZetListInputQuestionNumericEvaluators = InstanceType<typeof ZetListInputQuestionNumericEvaluators>;
//   export type ZetAdministerInputQuestionTextEvaluation = InstanceType<typeof ZetAdministerInputQuestionTextEvaluation>;
//   export type ZetEditInputQuestionTextEvaluator = InstanceType<typeof ZetEditInputQuestionTextEvaluator>;
//   export type ZetListInputQuestionTextEvaluators = InstanceType<typeof ZetListInputQuestionTextEvaluators>;
//   export type ZetAdministerRubric = InstanceType<typeof ZetAdministerRubric>;
//   export type ZetNoElements = InstanceType<typeof ZetNoElements>;
//   export type ZetNothingHere = InstanceType<typeof ZetNothingHere>;
//   export type ZetStatChip = InstanceType<typeof ZetStatChip>;
//   export type ZetTopHeader = InstanceType<typeof ZetTopHeader>;
//   export type ZetTestNavigation = InstanceType<typeof ZetTestNavigation>;
//   export type ZetEditBuilder = InstanceType<typeof ZetEditBuilder>;
//   export type ZetEditDynamicPageBuilder = InstanceType<typeof ZetEditDynamicPageBuilder>;
//   export type ZetEditDynamicPageBuilderSettings = InstanceType<typeof ZetEditDynamicPageBuilderSettings>;
//   export type ZetEditStaticPageBuilder = InstanceType<typeof ZetEditStaticPageBuilder>;
//   export type ZetEditCollector = InstanceType<typeof ZetEditCollector>;
//   export type ZetEditTimeLimit = InstanceType<typeof ZetEditTimeLimit>;
//   export type ZetMetaSelection = InstanceType<typeof ZetMetaSelection>;
//   export type ZetTestBuilder = InstanceType<typeof ZetTestBuilder>;
//   export type ZetEditContent = InstanceType<typeof ZetEditContent>;
//   export type ZetRunTestClient = InstanceType<typeof ZetRunTestClient>;
//   export type ZetTestClientNav = InstanceType<typeof ZetTestClientNav>;
//   export type ZetEditPagePicker = InstanceType<typeof ZetEditPagePicker>;
//   export type ZetEditCloneTest = InstanceType<typeof ZetEditCloneTest>;
//   export type ZetEditTestSettings = InstanceType<typeof ZetEditTestSettings>;
//   export type ZetTestReporting = InstanceType<typeof ZetTestReporting>;
//   export type ZetEditTestLibrary = InstanceType<typeof ZetEditTestLibrary>;
//   export type ZetEditAsset = InstanceType<typeof ZetEditAsset>;
//   export type ZetEditAssetImage = InstanceType<typeof ZetEditAssetImage>;
//   export type ZetEditAssetContent = InstanceType<typeof ZetEditAssetContent>;
//   export type ZetDisplayAsset = InstanceType<typeof ZetDisplayAsset>;
//   export type ZetEditTitle = InstanceType<typeof ZetEditTitle>;
//   export type ZetTestEditor = InstanceType<typeof ZetTestEditor>;
//   export type ZetOrganizationPlanCredits = InstanceType<typeof ZetOrganizationPlanCredits>;
//   export type ZetExportQuestions = InstanceType<typeof ZetExportQuestions>;
//   export type ZetScoreBoard = InstanceType<typeof ZetScoreBoard>;
//   export type ZetPageScore = InstanceType<typeof ZetPageScore>;
//   export type ZetRevealedQuestionnaireVm = InstanceType<typeof ZetRevealedQuestionnaireVm>;
//   export type ZetNotRevealedQuestionnaireVm = InstanceType<typeof ZetNotRevealedQuestionnaireVm>;
//   export type ZetTestClientUtilityBar = InstanceType<typeof ZetTestClientUtilityBar>;
//   export type ZetChatMenu = InstanceType<typeof ZetChatMenu>;
//   export type ZetPanelManager = InstanceType<typeof ZetPanelManager>;
//   export type ZetPanelContainer = InstanceType<typeof ZetPanelContainer>;
//   export type ZetDebugger = InstanceType<typeof ZetDebugger>;
//   export type ZetBreadcrumb = InstanceType<typeof ZetBreadcrumb>;
//   export type ZetAdministerPasscodes = InstanceType<typeof ZetAdministerPasscodes>;
//   export type ZetAdministerTaskRegistration = InstanceType<typeof ZetAdministerTaskRegistration>;
//   export type ZetRecentActivitiesSummary = InstanceType<typeof ZetRecentActivitiesSummary>;
//   export type ZetSubmittedTests = InstanceType<typeof ZetSubmittedTests>;
//   export type ZetRegisteredUsers = InstanceType<typeof ZetRegisteredUsers>;
//   export type ZetSentEmails = InstanceType<typeof ZetSentEmails>;
//   export type ZetQuestionAnalytics = InstanceType<typeof ZetQuestionAnalytics>;
//   export type ZetTestAnalytics = InstanceType<typeof ZetTestAnalytics>;
//   export type ZetTestEditorAnalytics = InstanceType<typeof ZetTestEditorAnalytics>;
//   export type ZetQuestionEditorAnalytics = InstanceType<typeof ZetQuestionEditorAnalytics>;
//   export type ZetHistogramChart = InstanceType<typeof ZetHistogramChart>;
// }
