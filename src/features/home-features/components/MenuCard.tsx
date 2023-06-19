import { IonIcon, IonText } from "@ionic/react";
import Card from "../../../components/Card";

interface MenuCardInterface {
    text: string;
    icon: string;
    routerLink: string;
}

const MenuCard: React.FC<MenuCardInterface> = ({ text, icon, routerLink }) => {
    return (
        <Card routerLink={routerLink}>
            <div className="flex flex-col items-center justify-center gap-2 p-5">
                <IonIcon icon={icon} className="text-2xl" />
                <IonText>{text}</IonText>
            </div>
        </Card>
    );
}

export default MenuCard;