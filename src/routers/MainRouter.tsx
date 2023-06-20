import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/Report";
import useAuthStore from "../stores/useAuthStore";
import PrivateRoute from "./PrivateRoute";

const MainRouter: React.FC = () => {
    const { isAuth } = useAuthStore();
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/home" component={() => <PrivateRoute isAuth={isAuth} component={Home} />} />
                <Route exact path="/dashboard" component={() => <PrivateRoute isAuth={isAuth} component={Dashboard} />} />
                <Route exact path="/user" component={() => <PrivateRoute isAuth={isAuth} isAdmin={true} component={User} />} />
                <Route exact path="/report" component={() => <PrivateRoute isAuth={isAuth} isAdmin={true} component={Report} />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

export default MainRouter;