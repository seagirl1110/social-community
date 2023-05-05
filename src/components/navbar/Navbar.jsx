import './Navbar.scss';

const Navbar = () => {
  const items = ['Profile', 'Messages', 'News', 'Music', 'Settings'];
  return (
    <aside className="navbar">
      <ul className="navbar__list nav-list">
        {items.map((item, index) => {
          return (
            <li key={index} className="nav-list__item">
              <a className="nav-list__link" href="#s">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Navbar;
