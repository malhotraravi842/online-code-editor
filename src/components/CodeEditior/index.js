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

export default CodeEditior;
