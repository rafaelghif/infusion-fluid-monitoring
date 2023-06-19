import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

interface MainLayoutInterface {
    children: React.ReactNode;
    title: string;
    padding?: boolean;
    backButton?: boolean;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children, title, padding = true, backButton = true }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="end" hidden={!backButton}>
                        <IonButton routerLink="/home">
                            <IonIcon icon={chevronBackOutline} />
                            <IonText className="ml-2">Back</IonText>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={padding ? "ion-padding" : ""}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {children}
            </IonContent>
        </IonPage>
    );
}

export default MainLayout;