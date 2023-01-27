import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { useState } from "react";
// require("codemirror/mode/javascript/javascript");

const Editor = ({ mode, label, value, setValue }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const options = {
    mode: mode,
    theme: "material",
    lineNumbers: true,
  };

  const onCollapse = () => {
    console.log("collapsed");
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`editor ${isCollapsed ? "editor--collapsed" : ""}`}>
      <div className="editor__navbar">
        <div>{label}</div>
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

export default Editor;
