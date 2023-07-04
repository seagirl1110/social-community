import './MyPosts.scss';
import Post from './post/Post';
import { createRef } from 'react';
import { addPost, updateNewPost } from '../../../data';

const MyPosts = (props) => {
  const { myPosts, dispatch } = props;
  const { posts, newPost } = myPosts;
  const postsElements = posts.map((post) => (
    <Post message={post.message} counter={post.counter} key={post.id} />
  ));

  const newPostElement = createRef();

  const onClickAddPost = () => {
    dispatch(addPost());
  };

  const onChangePost = () => {
    const text = newPostElement.current.value;
    dispatch(updateNewPost(text));
  };

  return (
    <div className="my-posts">
      <h3>My posts</h3>
      <div className="my-posts__new new-post">
        <h4 className="new-post__title">New post</h4>
        <textarea
          className="new-post__text"
          ref={newPostElement}
          value={newPost}
          onChange={onChangePost}
        ></textarea>
        <button className="new-post__add-btn" onClick={onClickAddPost}>
          Add post
        </button>
      </div>
      <div className="my-posts__posts posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
