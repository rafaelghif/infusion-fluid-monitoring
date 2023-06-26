import { Suspense, lazy, useCallback } from "react";
import { IonRefresher, IonRefresherContent, IonSpinner, RefresherEventDetail } from "@ionic/react";
import Card from "../../../components/Card";
import { useQuery } from "react-query";
import { getReports } from "../../../services/report-service";

const TableReport = lazy(() => import("./TableReport"));

const ContainerReport: React.FC = () => {
    const fetchItem = useCallback(async () => {
        return await getReports();
    }, []);

    const { data, refetch } = useQuery(["reports"], fetchItem);

    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        refetch();
        event.detail.complete();
    }

    return (
        <>
            <Card title="Data Reports">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    {data ? (<TableReport data={data} />) : <IonSpinner name="crescent" />}
                </Suspense>
            </Card>
        </>
    );
}

export default ContainerReport;