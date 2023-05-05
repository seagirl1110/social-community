import './MyPosts.scss';
import Post from './post/Post';

const MyPosts = () => {
  return (
    <div className="my-posts">
      <h3>My posts</h3>
      <div className="my-posts__new">
        <h4>New post</h4>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hi, how are you?" counter="15" />
        <Post message="It's my first post" counter="20" />
      </div>
    </div>
  );
};

export default MyPosts;
