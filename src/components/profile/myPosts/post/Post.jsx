import { purple } from '@mui/material/colors';
import './Post.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = (props) => {
  const ava = require('./../../../../image/ava/i.jpg');
  const { message, counter } = props;
  return (
    <div className="post">
      <div className="post__container">
        <img src={ava} alt="avatar" className="post__avatar" />
        <div>{message}</div>
      </div>
      <div className="post__counter">
        <button className="post__counter--btn">
          <FavoriteIcon style={{ color: purple[300] }} />
        </button>
        <span className="post__counter--num">{counter}</span>
      </div>
    </div>
  );
};

export default Post;
