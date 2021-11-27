import { Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import PrivatRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelector } from './redux/auth/auth-selectors';

const HomeView = lazy(() => import('./components/HomeView/HomeView'));
const RegisterView = lazy(() =>
  import('./components/RegisterView/RegisterView'),
);
const LoginView = lazy(() => import('./components/LoginView/LoginView'));
const ContactsView = lazy(() => import('./components/ContctsView/ContactView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelector.getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted redirectTo="/">
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
            <PrivatRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivatRoute>
          </Suspense>
        </Switch>
      </div>
    )
  );
}
