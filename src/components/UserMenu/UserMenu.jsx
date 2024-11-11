import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div className={css.user}>
      <p className={css.user_info}>Welcome, {user.name.toUpperCase()}</p>
      <button className={css.btn} onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
