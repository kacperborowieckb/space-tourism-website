import Nav from '../nav/Nav';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src="/shared/logo.svg" alt="logo" className="header__logo" />
      <div className="header__line"></div>
      <Nav />
    </header>
  );
};

export default Header;
