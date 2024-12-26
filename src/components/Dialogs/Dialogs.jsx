import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div>
          <NavLink
            to="/dialogs/1"
            className={(dialogData) =>
              dialogData.isActive ? s.active : s.dialog
            }
          >
            Dima
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/2"
            className={(dialogData) =>
              dialogData.isActive ? s.active : s.dialog
            }
          >
            Diana
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/3"
            className={(dialogData) =>
              dialogData.isActive ? s.active : s.dialog
            }
          >
            Ilya
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/4"
            className={(dialogData) =>
              dialogData.isActive ? s.active : s.dialog
            }
          >
            Sasha
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs/5" className={s.dialog}>
            Nataly
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>hi</div>
        <div className={s.message}>hello</div>
        <div className={s.message}>how are you</div>
      </div>
    </div>
  );
};

export default Dialogs;
