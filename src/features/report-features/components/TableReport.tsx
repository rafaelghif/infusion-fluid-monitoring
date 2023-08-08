import { TableColumn } from "react-data-table-component";
import { useMemo } from "react";
import Table from "../../../components/Table";
import { ReportInterface } from "../../../types/report-type";

interface TableReportProps {
    data: ReportInterface[];
}

const TableReport: React.FC<TableReportProps> = ({ data }) => {
    const columns: TableColumn<ReportInterface>[] = useMemo(() => [{
        name: "Id",
        selector: row => row.id,
        sortable: true,
        wrap: true
    }, {
        name: "Nurse Name",
        selector: row => row.name,
        sortable: true,
        wrap: true
    }, {
        name: "Weight",
        selector: row => `${row.weight}g`,
        sortable: true,
        wrap: true
    }, {
        name: "Total Weight",
        selector: row => `${row.totalWeight}g`,
        sortable: true,
        wrap: true
    }, {
        name: "Refill Date",
        selector: row => `${row.inputTime}`,
        sortable: true,
        wrap: true
    }], []);
    return <Table columns={columns} data={data} responsive pagination striped highlightOnHover />;
}

export default TableReport;