import { NavLink } from 'react-router-dom';
import './DialogsItem.scss';

const DialogsItem = (props) => {
  const { name, ava, id } = props.dialog;
  const url = require(`./../../../${ava}`);
  return (
    <NavLink
      to={`${id}`}
      className={(navData) =>
        navData.isActive
          ? 'dialogs-item dialogs-item--active'
          : 'dialogs-item'
      }
    >
      <img className="dialogs-item__ava" src={url} alt="ava" />
      <div>{name}</div>
    </NavLink>
  );
};

export default DialogsItem;
