import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

interface CardInterface {
    children: React.ReactNode;
    title?: string;
    routerLink?: string;
    onClick?: () => void;
}

const Card: React.FC<CardInterface> = ({ children, title, routerLink, onClick }) => {
    return (
        <IonCard routerLink={routerLink} onClick={onClick}>
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