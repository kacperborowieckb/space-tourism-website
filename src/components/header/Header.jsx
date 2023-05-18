import { useNavigate } from 'react-router';
import Nav from '../nav/Nav';
import './header.scss';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        src="/shared/logo.svg"
        alt="logo"
        className="header__logo"
        onClick={() => navigate('/')}
      />
      <div className="header__line"></div>
      <Nav />
    </header>
  );
};

export default Header;
