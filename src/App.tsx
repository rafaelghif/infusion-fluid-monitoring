import { IonApp, IonLoading, setupIonicReact } from "@ionic/react";
import { useEffect } from "react";
import { getToken } from "@firebase/messaging";
import { messaging } from "./libs/firebase";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./index.css";

import MainRouter from "./routers/MainRouter";
import useLoadingStore from "./stores/useLoadingStore";

setupIonicReact();

const App: React.FC = () => {
    // useEffect(() => {
    //     getToken(messaging).then((token) => {
    //         console.log("token", token);
    //     }).catch(err => {
    //         console.error(err);
    //     });
    // }, []);
    const { isLoading } = useLoadingStore();
    return (
        <IonApp>
            <IonLoading isOpen={isLoading} />
            <MainRouter />
        </IonApp>
    )
};

export default App;
