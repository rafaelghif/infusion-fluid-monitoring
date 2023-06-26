import { IonIcon, IonText } from "@ionic/react";
import Card from "../../../components/Card";

interface MenuCardProps {
    text: string;
    icon: string;
    routerLink?: string;
    href?: string;
    onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ text, icon, routerLink, href, onClick }) => {
    return (
        <Card routerLink={routerLink} href={href} onClick={onClick}>
            <div className="flex flex-col items-center justify-center gap-2 p-5">
                <IonIcon icon={icon} className="text-2xl" />
                <IonText>{text}</IonText>
            </div>
        </Card>
    );
}

export default MenuCard;