import { Suspense, lazy, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { IonSpinner } from "@ionic/react";
import ModalCreateReport from "../features/report-features/components/ModalCreateReport";
import FabButton from "../components/FabButton";

const ContainerReport = lazy(() => import("../features/report-features/components/ContainerReport"));

const Report: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <MainLayout title="Report">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerReport />
            </Suspense>
            <FabButton onClick={() => setIsOpenModalCreate(true)} />
            <ModalCreateReport isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
        </MainLayout>
    );
}

export default Report;