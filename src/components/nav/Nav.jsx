import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to={'/'}>
            <span className="nav__number">00</span>
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to={'/destination'}>
            <span className="nav__number">01</span>
            Destination
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to={'/crew'}>
            <span className="nav__number">02</span>
            Crew
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to={'/technology'}>
            <span className="nav__number">03</span>
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
