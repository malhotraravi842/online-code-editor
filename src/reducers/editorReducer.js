import { reduxConstants } from "../constants";

const initialStateSchema = {
  jsValue: localStorage.getItem("jsValue") || "",
  cssValue: localStorage.getItem("cssValue") || "",
  htmlValue: localStorage.getItem("htmlValue") || "",
  layout: localStorage.getItem("layout") || "layout1",
};

let initialState = initialStateSchema;
const layout = localStorage.getItem("layout");
if (layout) {
  initialState.layout = layout;
} else {
  localStorage.setItem("layout", "layout1");
}

const editorReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case reduxConstants.SET_JS_VALUE:
      newState = {
        ...state,
        jsValue: action.payload,
      };
      localStorage.setItem("jsValue", action.payload);
      return newState;

    case reduxConstants.SET_CSS_VALUE:
      newState = {
        ...state,
        cssValue: action.payload,
      };
      localStorage.setItem("cssValue", action.payload);
      return newState;

    case reduxConstants.SET_HTML_VALUE:
      newState = {
        ...state,
        htmlValue: action.payload,
      };
      localStorage.setItem("htmlValue", action.payload);
      return newState;

    case reduxConstants.REFRESH_EDITORS_VALUE:
      newState = {
        ...state,
        jsValue: "",
        cssValue: "",
        htmlValue: "",
      };
      localStorage.removeItem("jsValue");
      localStorage.removeItem("cssValue");
      localStorage.removeItem("htmlValue");
      return newState;

    case reduxConstants.CHANGE_EDITOR_LAYOUT:
      newState = {
        ...state,
        layout: action.payload,
      };
      localStorage.setItem("layout", action.payload);
      return newState;

    default:
      return state;
  }
};

export default editorReducer;
