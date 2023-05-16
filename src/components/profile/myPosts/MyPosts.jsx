import './MyPosts.scss';
import Post from './post/Post';

const MyPosts = (props) => {
  const myPostsData = props.data;
  const myPostsElements = myPostsData.map((post) => (
    <Post message={post.message} counter={post.counter} key={post.id} />
  ));
  return (
    <div className="my-posts">
      <h3>My posts</h3>
      <div className="my-posts__new">
        <h4>New post</h4>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>{myPostsElements}</div>
    </div>
  );
};

export default MyPosts;
