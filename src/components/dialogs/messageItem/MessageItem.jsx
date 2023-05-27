import './MessageItem.scss';
import cn from 'classnames';

const MessageItem = (props) => {
  const { user, text } = props.message;
  const name = cn('message', {
    'message--i': user === 'I',
  });
  const ava = require(`./../../../image/ava/${user.toLowerCase()}.jpg`);
  return (
    <div className={name}>
      <img className="message__user" src={ava} alt="ava"></img>
      <div className="message__text">{text}</div>
    </div>
  );
};

export default MessageItem;
