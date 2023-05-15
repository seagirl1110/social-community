import './MessageItem.scss';

const MessageItem = (props) => {
  return (
    <div className="message">
      <div className="message__user user">
        <div className="user__ava"></div>
        <div className="user__name">{props.user}</div>
      </div>
      <div className="message__text">{props.text}</div>
    </div>
  );
};

export default MessageItem;
