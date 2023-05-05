import './Post.scss';

const Post = (props) => {
  const ava = require('./../../../../image/ava.jpg');
  const { message, counter } = props;
  return (
    <div className="post">
      <div className="post__container">
        <img src={ava} alt="avatar" className="post__avatar" />
        <div>{message}</div>
      </div>
      <span>{counter}</span>
      <button>like</button>
    </div>
  );
};

export default Post;
