import { IonContent, IonPage } from "@ionic/react";
import ContainerLogin from "../features/login-features/components/ContainerLogin";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <ContainerLogin />
            </IonContent>
        </IonPage>
    );
}

export default Login;