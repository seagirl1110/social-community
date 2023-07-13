import MyPosts from './MyPosts';
import { addPost, updateNewPost } from '../../../reducer/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ myPosts: state.profilePage });

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPost()),
  updateNewPost: (text) => dispatch(updateNewPost(text)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
