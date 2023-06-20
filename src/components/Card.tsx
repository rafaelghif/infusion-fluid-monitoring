import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

interface CardInterface {
    children: React.ReactNode;
    title?: string;
    routerLink?: string;
    href?:string;
    onClick?: () => void;
}

const Card: React.FC<CardInterface> = ({ children, title,href, routerLink, onClick }) => {
    return (
        <IonCard routerLink={routerLink} href={href} onClick={onClick}>
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