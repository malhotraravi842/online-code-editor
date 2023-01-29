import { compose } from "redux";
import { connect } from "react-redux";
import { changeLayout, refreshEditors } from "../../actions/editor";
import { Button } from "../Button";
import Dropdown from "../Dropdown";
import { CodeLogo } from "../../assets";

const Navbar = ({ refreshEditors, changeLayout }) => {
  const LAYOUT_OPTIONS = [
    { label: "Layout 1", value: "layout1" },
    { label: "Layout 2", value: "layout2" },
    { label: "Layout 3", value: "layout3" },
  ];
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={CodeLogo} alt="code" />
        CodeEditor
      </div>
      <div className="navbar__btns">
        <Dropdown
          btnProps={{ label: "Change Layout" }}
          options={LAYOUT_OPTIONS}
          setOption={changeLayout}
        />
        <Button onClick={refreshEditors}>Refresh</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  refreshEditors: () => dispatch(refreshEditors()),
  changeLayout: (layout) => dispatch(changeLayout(layout)),
});

export default compose(connect(null, mapDispatchToProps))(Navbar);
