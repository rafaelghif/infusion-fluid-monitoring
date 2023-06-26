export interface ReportInterface {
    id: string;
    nurseName: string;
    patientName: string;
    weight: number;
    refillDate: string;
}

export type CreateReportType = Pick<ReportInterface, "nurseName" | "patientName" | "weight" | "refillDate">;