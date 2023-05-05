import './Header.scss';

const Header = () => {
  const logo = require('./../../image/logo.png');
  return (
    <header className="header">
      <div className="header__logo logo">
        <img src={logo} alt="logo" className="logo__img"></img>
        <h1 className="logo__text">
          <div>Social</div>
          <div>Community</div>
        </h1>
      </div>
    </header>
  );
};

export default Header;
