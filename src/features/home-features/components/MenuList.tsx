import { IonGrid, IonRow, IonCol } from "@ionic/react";
import MenuCard from "./MenuCard";
import { barChartOutline, logOutOutline, personOutline, readerOutline } from "ionicons/icons";
import useAuthStore from "../../../stores/useAuthStore";
import useUserStore from "../../../stores/useUserStore";

const MenuList: React.FC = () => {
    const { logoutUser } = useAuthStore();
    const { clearUser } = useUserStore();

    const handleLogout = () => {
        clearUser();
        logoutUser();
    }
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="6">
                    <MenuCard text="Dashboard" routerLink="/dashboard" icon={barChartOutline} />
                </IonCol>
                <IonCol size="6">
                    <MenuCard text="User" routerLink="/user" icon={personOutline} />
                </IonCol>
                {/* <IonCol size="6">
                    <MenuCard text="Report" routerLink="/report" icon={readerOutline} />
                </IonCol> */}
                <IonCol size="6">
                    <MenuCard text="Sign Out" href="/login" icon={logOutOutline} onClick={handleLogout} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default MenuList;