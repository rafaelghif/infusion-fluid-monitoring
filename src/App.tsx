import { IonApp, IonLoading, setupIonicReact } from "@ionic/react";
import { useEffect, useState } from "react";
import { getToken } from "@firebase/messaging";
import { database, messaging } from "./libs/firebase";

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
import { setToken } from "./services/local-storage-service";
import { createToken } from "./services/token-service";
import { doc, onSnapshot } from "firebase/firestore";
import useToast from "./hooks/useToast";

setupIonicReact();

const App: React.FC = () => {
    const { isLoading } = useLoadingStore();
    const { errorToast } = useToast();
    useEffect(() => {
        getToken(messaging).then(async (token) => {
            setToken(token);
            await createToken(token);
        }).catch(err => {
            console.error(err);
        });

        let unsubscribe = onSnapshot(doc(database, "measurement", "data"), (doc) => {
            const data = doc.data();
            if (data?.value) {
                if (data?.value <= 10) {
                    errorToast("Infusion Fluid Under 10%", 10000, "bottom");
                }
            }
        });
    }, []);
    return (
        <IonApp>
            <IonLoading isOpen={isLoading} />
            <MainRouter />
        </IonApp>
    )
};

export default App;
