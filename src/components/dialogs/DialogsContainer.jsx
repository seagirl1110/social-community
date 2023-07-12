import Dialogs from './Dialogs';
import { sendMessage, updateNewMessage } from '../../reducer/dialogs-reducer';

const DialogsContainer = (props) => {
  const dialogsPage = props.store.getState().dialogsPage;
  const dispatch = props.store.dispatch;

  const onChangeMessage = (text) => {
    dispatch(updateNewMessage(text));
  };
  const onClickBtnSend = () => {
    dispatch(sendMessage());
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      updateNewMessage={onChangeMessage}
      sendMessage={onClickBtnSend}
    />
  );
};

export default DialogsContainer;
