import { TableColumn } from "react-data-table-component";
import { useMemo } from "react";
import Table from "../../../components/Table";
import { UserInterface } from "../../../types/user-type";
import { ReportInterface } from "../../../types/report-type";

interface TableReportProps {
    data: UserInterface[];
}

const TableReport: React.FC<TableReportProps> = ({ data }) => {
    const columns: TableColumn<ReportInterface>[] = useMemo(() => [{
        name: "Id",
        selector: row => row.id,
        sortable: true,
        wrap: true
    }, {
        name: "Nurse Name",
        selector: row => row.nurseName,
        sortable: true,
        wrap: true
    }, {
        name: "Patient Name",
        selector: row => row.patientName,
        sortable: true,
        wrap: true
    }, {
        name: "Weight",
        selector: row => `${row.weight}g`,
        sortable: true,
        wrap: true
    }, {
        name: "Refill Date",
        selector: row => `${row.refillDate}`,
        sortable: true,
        wrap: true
    }], []);
    return <Table columns={columns} data={data} responsive pagination striped highlightOnHover />;
}

export default TableReport;