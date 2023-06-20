import { IonSpinner } from "@ionic/react";
import { Suspense, lazy } from "react"

const RadialChart = lazy(() => import("./RadialChart"));

const ContainerDashboard: React.FC = () => {
    return (
        <>
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <RadialChart />
            </Suspense>
        </>
    );
}

export default ContainerDashboard;