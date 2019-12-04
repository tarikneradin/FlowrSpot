import { INFO_MODAL_ACTIONS } from "./info-modal-constants";

export const toggleInfoModal = (message, options = {}) => ({
  type: INFO_MODAL_ACTIONS.TOGGLE_INFO_MODAL,
  data: {
    message,
    ctaText: options.ctaText,
    ctaCallback: options.ctaCallback,
    additionalCtaText: options.additionalCtaText,
    additionalCtaCallback: options.additionalCtaCallback
  }
});
