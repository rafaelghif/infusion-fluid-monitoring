import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

interface CardProps {
    children: React.ReactNode;
    title?: string;
    routerLink?: string;
    href?:string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, title,href, routerLink, onClick }) => {
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