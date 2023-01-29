import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

const Editor = ({ mode, label, value, setValue, layout, logo }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const options = {
    mode: mode,
    theme: "material",
    lineNumbers: true,
    lineWrapping: true,
    autofocus: true,
  };

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`editor ${isCollapsed ? "editor--collapsed" : ""} ${layout}`}
    >
      <div className="editor__navbar">
        <div className="editor__navbar__logo">
          <img src={logo} alt={label} />
          {label}
        </div>

        <button
          className="editor__navbar__btn"
          type="button"
          onClick={onCollapse}
        >
          <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
        </button>
      </div>
      <CodeMirror
        value={value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        onChange={(editor, data, value) => {
          // console.log(data);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  layout: state.editor.layout,
});

export default compose(connect(mapStateToProps))(Editor);
