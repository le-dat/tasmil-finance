import Logo from "../Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 container flex items-center justify-between">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
