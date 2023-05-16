import './Dialogs.scss';
import DialogsItem from './dialogsItem/DialogsItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
  const { dialogs, messages } = props;
  const dialogsElements = dialogs.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  const messagesElements = messages.map((message) => (
    <MessageItem user={message.user} text={message.text} key={message.id} />
  ));
  return (
    <div>
      <h3>Dialogs</h3>
      <div className="wrapper">
        <div className="dialogs">{dialogsElements}</div>
        <div className="messages">{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
