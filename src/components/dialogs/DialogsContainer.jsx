import Dialogs from './Dialogs';
import { sendMessage, updateNewMessage } from '../../reducer/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });

const mapDispatchToProps = (dispatch) => ({
  updateNewMessage: (text) => dispatch(updateNewMessage(text)),
  sendMessage: () => dispatch(sendMessage()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
