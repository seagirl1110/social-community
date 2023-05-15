import './Dialogs.scss';
import DialogsItem from './dialogsItem/DialogsItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = () => {
  const users = [
    { name: 'Alex', id: 1 },
    { name: 'Nastya', id: 2 },
    { name: 'Maksim', id: 3 },
    { name: 'Sveta', id: 4 },
  ];
  return (
    <div>
      <h3>Dialogs</h3>
      <div className="wrapper">
        <div className="dialogs">
          {users.map((user) => (
            <DialogsItem name={user.name} id={user.id} key={user.id} />
          ))}
        </div>
        <div className="messages">
          <MessageItem user="user" text="Hi!"></MessageItem>
          <MessageItem user="me" text="Hi! How are you?"></MessageItem>
          <MessageItem
            user="user"
            text="I'm fine, thanks, and you?"
          ></MessageItem>
          <MessageItem user="me" text="I'm good!"></MessageItem>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
