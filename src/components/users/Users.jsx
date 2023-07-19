import './Users.scss';
import UserItem from './userItem/UserItem';

const Users = (props) => {
  const {usersPage, toggleFollow} = props;
  const usersElements = usersPage.users.map((user) => (
    <UserItem user={user} key={user.id} toggleFollow={toggleFollow} />
  ));
  return (
    <div className="users">
      <h3 className="users__title">Users</h3>
      <div className="users__wrapper">{usersElements}</div>
    </div>
  );
};

export default Users;
