import { compose } from "redux";
import { connect } from "react-redux";
import { refreshEditors } from "../../actions/editor";
import { Button } from "../Button";

const Navbar = ({ refreshEditors }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">CodeEditor</div>
      <div className="navbar__btns">
        <Button onClick={refreshEditors}>Refresh</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  refreshEditors: () => dispatch(refreshEditors()),
});

export default compose(connect(null, mapDispatchToProps))(Navbar);
