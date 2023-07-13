import Dialogs from './Dialogs';
import { sendMessage, updateNewMessage } from '../../reducer/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const dialogsPage = store.getState().dialogsPage;
        const dispatch = store.dispatch;

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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
