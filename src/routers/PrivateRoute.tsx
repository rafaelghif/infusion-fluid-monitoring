import { Redirect } from "react-router";
import useUserStore from "../stores/useUserStore";
import Strict from "../pages/Strict";

interface PrivateRouteInterface {
    isAuth: boolean;
    isAdmin?: boolean;
    component: React.FC<any>;
}

const PrivateRoute: React.FC<PrivateRouteInterface> = ({ isAuth, isAdmin = false, component: Component }) => {
    const { user } = useUserStore();
    const canAccess = isAdmin ? user.isAdmin : true;
    if (!isAuth) {
        return <Redirect to="/login" />
    }
    return canAccess ? <Component /> : <Strict />
}

export default PrivateRoute;