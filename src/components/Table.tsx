
import DataTable, { TableColumn, createTheme } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";

interface ReactDataTableProps {
    data: Array<any>;
    columns: TableColumn<any>[];
    pagination?: boolean;
    striped?: boolean;
    responsive?: boolean;
    dense?: boolean;
    highlightOnHover?: boolean;
    expandableRows?: boolean;
    expandableRowsComponent?: ExpandableRowsComponent<any>;
}

createTheme("dark", {
    background: {
        default: "transparent",
    },
});

const Table: React.FC<ReactDataTableProps> = ({ data, columns, pagination, striped, responsive, dense, highlightOnHover, expandableRows, expandableRowsComponent, }) => {
    const matches = useMediaQuery("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useState<boolean>(matches);

    useEffect(() => {
        setIsDark(matches);
    }, [matches]);

    return (
        <DataTable theme={isDark ? "dark" : ""} className="shadow-sm" columns={columns} data={data} pagination={pagination} striped={striped} responsive={responsive} dense={dense} highlightOnHover={highlightOnHover} expandableRows={expandableRows} expandableRowsComponent={expandableRowsComponent} />
    );
}

export default Table;