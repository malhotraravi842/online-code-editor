import { reduxConstants } from "../constants";

const initialStateSchema = {
  jsValue: "",
  cssValue: "",
  htmlValue: "",
};

let initialState = initialStateSchema;

const editorReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case reduxConstants.SET_JS_VALUE:
      newState = {
        ...state,
        jsValue: action.payload,
      };
      return newState;

    case reduxConstants.SET_CSS_VALUE:
      newState = {
        ...state,
        cssValue: action.payload,
      };
      return newState;

    case reduxConstants.SET_HTML_VALUE:
      newState = {
        ...state,
        htmlValue: action.payload,
      };
      return newState;

    case reduxConstants.REFRESH_EDITORS_VALUE:
      newState = {
        ...state,
        jsValue: "",
        cssValue: "",
        htmlValue: "",
      };
      return newState;

    default:
      return state;
  }
};

export default editorReducer;
