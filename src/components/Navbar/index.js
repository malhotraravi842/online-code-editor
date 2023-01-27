import { Button } from "../Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">CodeEditor</div>
      <div className="navbar__btns">
        <Button>Refresh</Button>
      </div>
    </div>
  );
};

export default Navbar;
