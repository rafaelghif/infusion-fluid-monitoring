import { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import FabButton from "../components/FabButton";
import UserContainer from "../features/user-features/components/UserContainer";
import ModalCreateUser from "../features/user-features/components/ModalCreateUser";

const User: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <MainLayout title="User">
            <UserContainer />
            <FabButton onClick={() => setIsOpenModalCreate(true)} />
            <ModalCreateUser isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
        </MainLayout>
    );
}
export default User;