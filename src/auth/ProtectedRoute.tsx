import { ComponentType } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/common/loading/Loading';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />
    });
    return <Component {...args} />;
};

export default ProtectedRoute;
