import AuthContainer from "./AuthContainer";
import NavList from "./NavList";

const Header = () => {
  return (
    <div>
      <h1>MyApp</h1>
      <NavList />
      <AuthContainer />
    </div>
  );
};
export default Header;
