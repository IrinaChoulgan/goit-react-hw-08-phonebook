import { useDispatch, useSelector } from 'react-redux';
import defaultImg from './default-avatar.jpg';
import { authSelector } from '../../redux/auth/auth-selectors';
import style from '../UserMenu/UserMenu.module.css';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);
  const avatar = defaultImg;

  return (
    <div className={style.wrapper}>
      <img src={avatar} alt="" width="32" style={style.avatar} />
      <span className={style.name}>Wellcome, {name}</span>
      <button
        type="button"
        className={style.submit}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
