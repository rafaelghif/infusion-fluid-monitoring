import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/Report";

const MainRouter: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/home" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/user" component={User} />
                <Route exact path="/report" component={Report} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

export default MainRouter;