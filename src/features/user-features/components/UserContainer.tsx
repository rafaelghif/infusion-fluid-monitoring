import { Suspense, lazy, useCallback, useState } from "react";
import Card from "../../../components/Card";
import { UserInterface } from "../../../types/user-type";
import { IonRefresher, IonRefresherContent, IonSpinner, RefresherEventDetail } from "@ionic/react";
import ModalUpdateUser from "./ModalUpdateUser";
import { useQuery } from "react-query";
import { getUsers } from "../../../services/user-service";

const TableUser = lazy(() => import("./TableUser"));

const UserContainer: React.FC = () => {
    const fetchItem = useCallback(async () => {
        return await getUsers();
    }, []);

    const { data, refetch } = useQuery(["user"], fetchItem);

    const [selectedValue, setSelectedValue] = useState<UserInterface>();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        refetch();
        event.detail.complete();
    }

    const handleClickBtnEdit = (value: UserInterface) => {
        setSelectedValue(value);
        setIsOpenModal(true);
    }

    return (
        <>
            <Card title="Data Users">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    {data ? (<TableUser data={data} handleClickBtnEdit={(val) => handleClickBtnEdit(val)} />) : <IonSpinner name="crescent" />}
                </Suspense>
            </Card>
            <ModalUpdateUser isOpen={isOpenModal} data={selectedValue} onDidDismiss={() => setIsOpenModal(false)} />
        </>
    );
}

export default UserContainer;