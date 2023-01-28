import { compose } from "redux";
import { connect } from "react-redux";
import { setJsValue, setCssValue, setHtmlValue } from "../../actions/editor";
import Editior from "./Editior";

const CodeEditior = ({
  htmlValue,
  cssValue,
  jsValue,
  setHtmlValue,
  setCssValue,
  setJsValue,
}) => {
  return (
    <div className="code-editiors">
      <Editior
        mode="htmlmixed"
        label="HTML"
        value={htmlValue}
        setValue={setHtmlValue}
      />
      <Editior
        mode="sass"
        label="CSS"
        value={cssValue}
        setValue={setCssValue}
      />
      <Editior
        mode="javascript"
        label="JS"
        value={jsValue}
        setValue={setJsValue}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  jsValue: state.editor.jsValue,
  cssValue: state.editor.cssValue,
  htmlValue: state.editor.htmlValue,
});

const mapDispatchToProps = (dispatch) => ({
  setJsValue: (value) => dispatch(setJsValue(value)),
  setCssValue: (value) => dispatch(setCssValue(value)),
  setHtmlValue: (value) => dispatch(setHtmlValue(value)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CodeEditior
);
