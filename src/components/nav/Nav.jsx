import './nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = ({ openNav, setOpenNav }) => {
  return (
    <nav className="nav" style={{ transform: openNav ? 'translateX(-100%)' : '' }}>
      <button
        className="nav__close"
        onClick={() => {
          setOpenNav(false);
        }}
      >
        <img src="/shared/icon-close.svg" alt="close nav icon" />
      </button>
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? 'nav__active' : '')}>
            <span className="nav__number">00</span>
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to={'/destination'}
            className={({ isActive }) => (isActive ? 'nav__active' : '')}
          >
            <span className="nav__number">01</span>
            Destination
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to={'/crew'} className={({ isActive }) => (isActive ? 'nav__active' : '')}>
            <span className="nav__number">02</span>
            Crew
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to={'/technology'} className={({ isActive }) => (isActive ? 'nav__active' : '')}>
            <span className="nav__number">03</span>
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
