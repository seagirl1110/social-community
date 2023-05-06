import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const items = ['Profile', 'Messages', 'News', 'Music', 'Settings'];
  return (
    <aside className="navbar">
      <ul className="navbar__list nav-list">
        {items.map((item, index) => {
          return (
            <li key={index} className="nav-list__item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'nav-list__link nav-list__link--active' : 'nav-list__link'
                }
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Navbar;
