import MyPosts from './MyPosts';
import { addPostAC, updateNewPostAC } from '../../../reducer/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ myPosts: state.profilePage });

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostAC()),
  updateNewPost: (text) => dispatch(updateNewPostAC(text)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
