import { TableColumn } from "react-data-table-component";
import { useMemo } from "react";
import Table from "../../../components/Table";
import { IonButton, IonText } from "@ionic/react";
import { UserInterface } from "../../../types/user-type";

interface TableUserProps {
    data: UserInterface[];
    handleClickBtnEdit: (data: UserInterface) => void;
}

const TableUser: React.FC<TableUserProps> = ({ data, handleClickBtnEdit }) => {
    const columns: TableColumn<UserInterface>[] = useMemo(() => [{
        name: "Id",
        selector: row => row.id,
        sortable: true,
        wrap: true
    }, {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        wrap: true
    }, {
        name: "Username",
        selector: row => row.username,
        sortable: true,
        wrap: true
    }, {
        name: "Password",
        selector: row => row.password,
        sortable: true,
        wrap: true
    }, {
        name: "IsAdmin",
        cell: row => row.isAdmin ? <IonText color="success">Yes</IonText> : <IonText color="danger">No</IonText>,
        sortable: true,
        wrap: true
    }, {
        name: "Edit",
        cell: row => <IonButton fill="clear" color="warning" onClick={() => { handleClickBtnEdit(row) }}>Edit</IonButton>,
        center: true
    },], [handleClickBtnEdit]);
    return <Table columns={columns} data={data} responsive pagination striped highlightOnHover />;
}

export default TableUser;