import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogs = [
    { id: "1", name: "Dima" },
    { id: "2", name: "Diana" },
    { id: "3", name: "Ilya" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Nataly" },
    { id: "6", name: "Dima" },
    { id: "7", name: "Diana" },
    { id: "8", name: "Ilya" },
    { id: "9", name: "Sasha" },
    { id: "10", name: "Nataly" },
  ];

  const messages = [
    { id: "1", message: "hi" },
    { id: "2", message: "hello" },
    { id: "3", message: "how are you" },
  ];

  const dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
