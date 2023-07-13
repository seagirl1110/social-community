import MyPosts from './MyPosts';
import { addPost, updateNewPost } from '../../../reducer/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const profilePage = store.getState().profilePage;
        const dispatch = store.dispatch;

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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
