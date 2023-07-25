import { Redirect } from "react-router";
import useUserStore from "../stores/useUserStore";
import Strict from "../pages/Strict";

interface PrivateRouteInterface {
    isAuth: boolean;
    isAdmin?: boolean;
    isNurse?: boolean;
    nurse?: boolean;
    component: React.FC<any>;
}

const PrivateRoute: React.FC<PrivateRouteInterface> = ({ isAuth, isAdmin = false, nurse = false, isNurse = false, component: Component }) => {
    const { user } = useUserStore();
    let canAccess = isAdmin ? user.isAdmin : true;
    if (nurse) {
        if (user.isAdmin) {
            if (user.isAdmin === true) {
                canAccess = true;
            } else {
                canAccess = isNurse ? user?.isNurse || false : false;
            }
        } else {
            canAccess = isNurse ? user?.isNurse || false : false;
        }
    }
    if (!isAuth) {
        return <Redirect to="/login" />
    }
    return canAccess ? <Component /> : <Strict />
}

export default PrivateRoute;