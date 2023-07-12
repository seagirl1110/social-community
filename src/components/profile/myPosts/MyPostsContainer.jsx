import MyPosts from './MyPosts';
import { addPost, updateNewPost } from '../../../reducer/profile-reducer';

const MyPostsContainer = (props) => {
  const profilePage = props.store.getState().profilePage;
  const dispatch = props.store.dispatch;

  const onClickAddPost = () => {
    dispatch(addPost());
  };

  const onChangePost = (text) => {
    dispatch(updateNewPost(text));
  };

  return (
    <MyPosts
      myPosts={profilePage}
      addPost={onClickAddPost}
      updateNewPost={onChangePost}
    />
  );
};

export default MyPostsContainer;
