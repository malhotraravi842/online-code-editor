import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Dashboard } from "./pages";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Dashboard />
    </Fragment>
  );
};

export default App;
