import { reduxConstants } from "../constants";

// Action to update JavaScript Value
export const setJsValue = (value) => ({
  type: reduxConstants.SET_JS_VALUE,
  payload: value,
});

// Action to update CSS Value
export const setCssValue = (value) => ({
  type: reduxConstants.SET_CSS_VALUE,
  payload: value,
});

// Action to update HTML Value
export const setHtmlValue = (value) => ({
  type: reduxConstants.SET_HTML_VALUE,
  payload: value,
});

// Action to clear all editors value
export const refreshEditors = () => ({
  type: reduxConstants.REFRESH_EDITORS_VALUE,
});
