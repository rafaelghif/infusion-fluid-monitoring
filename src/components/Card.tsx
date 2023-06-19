import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

interface CardInterface {
    children: React.ReactNode;
    title?: string;
    routerLink?: string
}

const Card: React.FC<CardInterface> = ({ children, title, routerLink }) => {
    return (
        <IonCard routerLink={routerLink}>
            <IonCardHeader hidden={!title}>
                <IonCardTitle>{title ?? ""}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {children}
            </IonCardContent>
        </IonCard>
    );
}

export default Card;