import { Suspense, lazy } from "react";
import MainLayout from "../Layouts/MainLayout";
import { IonSpinner } from "@ionic/react";

const ContainerDashboard = lazy(() => import("../features/dashboard-features/components/ContainerDashboard"));

const Dashboard: React.FC = () => {
    return (
        <MainLayout title="Dashboard">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerDashboard />
            </Suspense>
        </MainLayout>
    );
}

export default Dashboard;