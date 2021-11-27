import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelector } from '../redux/auth/auth-selectors';

export default function PrivatRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
