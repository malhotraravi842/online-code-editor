import { compose } from "redux";
import { connect } from "react-redux";
import { refreshEditors } from "../../actions/editor";
import { Button } from "../Button";
import Dropdown from "../Dropdown";

const Navbar = ({ refreshEditors }) => {
  const LAYOUT_OPTIONS = ["Layout 1", "Layout 2", "Layout 3"];
  return (
    <div className="navbar">
      <div className="navbar__logo">CodeEditor</div>
      <div className="navbar__btns">
        <Dropdown
          btnProps={{ label: "Change Layout" }}
          options={LAYOUT_OPTIONS}
        />
        <Button onClick={refreshEditors}>Refresh</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  refreshEditors: () => dispatch(refreshEditors()),
});

export default compose(connect(null, mapDispatchToProps))(Navbar);
