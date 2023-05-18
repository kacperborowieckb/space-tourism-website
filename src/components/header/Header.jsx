import { useNavigate } from 'react-router';
import Nav from '../nav/Nav';
import './header.scss';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="header">
      <img
        src="/shared/logo.svg"
        alt="logo"
        className="header__logo"
        onClick={() => navigate('/')}
      />
      <div className="header__line"></div>
      <button
        className="header__open"
        onClick={() => {
          setOpenNav(true);
        }}
      >
        <img src="/shared/icon-hamburger.svg" alt="open nav icon" />
      </button>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
    </header>
  );
};

export default Header;
