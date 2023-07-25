import { Suspense, lazy } from "react";
import MainLayout from "../Layouts/MainLayout";
import { IonSpinner } from "@ionic/react";

const ContainerReport = lazy(() => import("../features/report-features/components/ContainerReport"));

const Report: React.FC = () => {
    return (
        <MainLayout title="Report">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerReport />
            </Suspense>
        </MainLayout>
    );
}

export default Report;