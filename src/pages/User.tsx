import { Suspense, lazy, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import FabButton from "../components/FabButton";
import ModalCreateUser from "../features/user-features/components/ModalCreateUser";
import { IonSpinner } from "@ionic/react";

const UserContainer = lazy(() => import("../features/user-features/components/UserContainer"));

const User: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <MainLayout title="User">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <UserContainer />
            </Suspense>
            <FabButton onClick={() => setIsOpenModalCreate(true)} />
            <ModalCreateUser isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
        </MainLayout>
    );
}
export default User;