import ConnectWallet from "../ConnectWallet";
import Logo from "../Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Logo className="fixed top-6 left-0 z-50" />
      <Navbar className="fixed top-6 left-1/2 -translate-x-1/2 z-50" />
      <ConnectWallet className="fixed top-6 right-0 z-50" />
    </>
  );
};

export default Header;
