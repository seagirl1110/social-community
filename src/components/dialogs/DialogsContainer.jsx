import Dialogs from './Dialogs';
import { sendMessageAC, updateNewMessageAC } from '../../reducer/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });

const mapDispatchToProps = (dispatch) => ({
  updateNewMessage: (text) => dispatch(updateNewMessageAC(text)),
  sendMessage: () => dispatch(sendMessageAC()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
