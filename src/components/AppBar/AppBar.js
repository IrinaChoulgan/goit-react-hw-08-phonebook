import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelector } from '../../redux/auth/auth-selectors';
import styles from '../AppBar/AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
