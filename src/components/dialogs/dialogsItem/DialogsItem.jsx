import { NavLink } from 'react-router-dom';
import './DialogsItem.scss';

const DialogsItem = (props) => {
  return (
    <NavLink
      to={`${props.id}`}
      className={(navData) =>
        navData.isActive
          ? 'dialogs__item dialogs__item--active'
          : 'dialogs__item'
      }
    >
      {props.name}
    </NavLink>
  );
};

export default DialogsItem;
