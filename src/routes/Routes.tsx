import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '../auth/ProtectedRoute';
import paths from './paths';
import Loading from '../components/common/loading/Loading';

const Home = () => <h1>Home</h1>
const CodeEditor = () => <h1>Editor</h1>

const Routes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.codeEditor} element={<ProtectedRoute component={CodeEditor} />} />
    </Switch>
  );
};

export default Routes;
