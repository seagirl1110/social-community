import './Header.scss';

const Header = () => {
  const url = require('./../image/logo.png');
  return (
    <div className="header">
      <h1 className="header__logo logo">
        <img src={url} alt="logo" className="logo__img"></img>
        <div className="logo__text">
          <div>Social</div>
          <div>Community</div>
        </div>
      </h1>
    </div>
  );
};

export default Header;
