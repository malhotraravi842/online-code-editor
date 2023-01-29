import { compose } from "redux";
import { connect } from "react-redux";
import { setJsValue, setCssValue, setHtmlValue } from "../../actions/editor";
import Editior from "./Editior";
import { constants } from "../../constants";

const CodeEditior = ({
  htmlValue,
  cssValue,
  jsValue,
  setHtmlValue,
  setCssValue,
  setJsValue,
  layout,
}) => {
  return (
    <div className={`code-editiors ${layout}`}>
      <Editior
        mode="htmlmixed"
        label="HTML"
        value={htmlValue}
        setValue={setHtmlValue}
        logo={constants.HTML_LOGO_URL}
      />
      <Editior
        mode="sass"
        label="CSS"
        value={cssValue}
        setValue={setCssValue}
        logo={constants.CSS_LOGO_URL}
      />
      <Editior
        mode="javascript"
        label="JS"
        value={jsValue}
        setValue={setJsValue}
        logo={constants.JAVASCRIPT_LOGO_URL}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  jsValue: state.editor.jsValue,
  cssValue: state.editor.cssValue,
  htmlValue: state.editor.htmlValue,
  layout: state.editor.layout,
});

const mapDispatchToProps = (dispatch) => ({
  setJsValue: (value) => dispatch(setJsValue(value)),
  setCssValue: (value) => dispatch(setCssValue(value)),
  setHtmlValue: (value) => dispatch(setHtmlValue(value)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CodeEditior
);
