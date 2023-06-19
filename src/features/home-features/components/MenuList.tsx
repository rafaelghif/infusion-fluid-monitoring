import { IonGrid, IonRow, IonCol } from "@ionic/react";
import MenuCard from "./MenuCard";
import { barChartOutline, logOutOutline, personOutline, readerOutline } from "ionicons/icons";

const MenuList: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="6">
                    <MenuCard text="Dashboard" routerLink="/dashboard" icon={barChartOutline} />
                </IonCol>
                <IonCol size="6">
                    <MenuCard text="User" routerLink="/user" icon={personOutline} />
                </IonCol>
                <IonCol size="6">
                    <MenuCard text="Report" routerLink="/report" icon={readerOutline} />
                </IonCol>
                <IonCol size="6">
                    <MenuCard text="Sign Out" routerLink="/login" icon={logOutOutline} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default MenuList;