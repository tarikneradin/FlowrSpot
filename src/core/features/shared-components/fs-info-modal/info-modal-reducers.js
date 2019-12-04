import { INFO_MODAL_ACTIONS } from "./info-modal-constants";

const infoModalInitialState = {
  showInfoModal: false,
  message: "",
  title: "",
  ctaText: "OK",
  ctaCallback: null,
  additionalCtaText: "",
  additionalCtaCallback: null
};

export const infoModal = (state = infoModalInitialState, action) => {
  switch (action.type) {
    case INFO_MODAL_ACTIONS.TOGGLE_INFO_MODAL: {
      if (state.showInfoModal) {
        return {
          ...state,
          showInfoModal: false,
          message: "",
          ctaText: "OK",
          ctaCallback: null,
          additionalCtaText: "",
          additionalCtaCallback: null
        };
      }
      return {
        ...state,
        showInfoModal: true,
        message: action.data.message,
        ctaText: (action.data.ctaText && String(action.data.ctaText)) || "OK",
        ctaCallback: action.data.ctaCallback,
        additionalCtaText:
          action.data.additionalCtaText &&
          String(action.data.additionalCtaText),
        additionalCtaCallback: action.data.additionalCtaCallback
      };
    }
    default:
      return state;
  }
};
