import { connect } from "react-redux";
import { compose } from "redux";
import CodeEditior from "../components/CodeEditior";
import WebView from "../components/WebView";

const Dashboard = ({ layout }) => {
  return (
    <div className={`dashboard ${layout}`}>
      <CodeEditior />
      <WebView />
    </div>
  );
};

const mapStateToProps = (state) => ({
  layout: state.editor.layout,
});

export default compose(connect(mapStateToProps))(Dashboard);
