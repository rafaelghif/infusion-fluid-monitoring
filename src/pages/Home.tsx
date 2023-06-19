import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect } from 'react';
import { getToken } from '@firebase/messaging';
import { messaging } from '../libs/firebase';

const Home: React.FC = () => {
    useEffect(() => {
        getToken(messaging).then((token) => {
            console.log("token", token);
        }).catch(err => {
            console.error(err);
        });
    }, []);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Home;
