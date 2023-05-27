import './Dialogs.scss';
import DialogsItem from './dialogsItem/DialogsItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
  const { dialogs, messages } = props;
  const dialogsElements = dialogs.map((dialog) => (
    <DialogsItem dialog={dialog} key={dialog.id} />
  ));
  const messagesElements = messages.map((message) => (
    <MessageItem message={message} key={message.id} />
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
