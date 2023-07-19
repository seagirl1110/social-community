import Users from './Users';
import { toggleFollowAC } from './../../reducer/users-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  usersPage: state.usersPage,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFollow: (userID) => dispatch(toggleFollowAC(userID)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
