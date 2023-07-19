import './UserItem.scss';

const UserItem = (props) => {
  const { user, toggleFollow } = props;
  const { name, status, ava, follow, location, id } = user;
  const { country, city } = location;
  const url = require(`./../../../${ava}`);

  const onClickFollowBtn = (userID) => {
    toggleFollow(userID);
  };

  return (
    <div className="user">
      <div className="user__ava-wrapper">
        <img className="user__ava" src={url} alt="ava" />
        <button
          onClick={() => onClickFollowBtn(id)}
          className="user__follow-btn"
        >
          {follow ? 'Follow' : 'Unfollow'}
        </button>
      </div>
      <div className="user__wrapper">
        <div>
          <div className="user__name">{name}</div>
          <div>{status}</div>
        </div>
        <div>
          <div>{country}</div>
          <div>{city}</div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
