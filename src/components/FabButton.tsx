import { IonFab, IonFabButton, IonIcon } from "@ionic/react"
import { addOutline } from "ionicons/icons"

interface FabButtonProps {
    onClick: () => void;
}

const FabButton: React.FC<FabButtonProps> = ({ onClick }) => {
    return (
        <IonFab slot="fixed" vertical="bottom" horizontal="end" onClick={onClick}>
            <IonFabButton>
                <IonIcon icon={addOutline} />
            </IonFabButton>
        </IonFab>
    )
}

export default FabButton;