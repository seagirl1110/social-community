import './Dialogs.scss';
import DialogsItem from './dialogsItem/DialogsItem';
import MessageItem from './messageItem/MessageItem';
import { sendMessage, updateNewMessage } from '../../reducer/dialogs-reducer';

const Dialogs = (props) => {
  const { dialogsPage, dispatch } = props;
  const { dialogs, messages, newMessage } = dialogsPage;

  const dialogsElements = dialogs.map((dialog) => (
    <DialogsItem dialog={dialog} key={dialog.id} />
  ));
  const messagesElements = messages.map((message) => (
    <MessageItem message={message} key={message.id} />
  ));

  const onChangeMessage = (event) => {
    const text = event.target.value;
    dispatch(updateNewMessage(text));
  };
  const onClickBtnSend = () => {
    dispatch(sendMessage());
  };

  return (
    <div>
      <h3>Dialogs</h3>
      <div className="wrapper">
        <div className="dialogs">{dialogsElements}</div>
        <div className="messages">
          {messagesElements}
          <div className="messages__new new-message">
            <h4 className="new-messages__title">New message</h4>
            <textarea
              className="new-message__text"
              value={newMessage}
              placeholder='Enter your message'
              onChange={onChangeMessage}
            ></textarea>
            <button className="new-message__btn-send" onClick={onClickBtnSend}>
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
