import { useMutation, useQueryClient } from "react-query";
import useToast from "../../../hooks/useToast";
import useLoadingStore from "../../../stores/useLoadingStore";
import { CreateReportType } from "../../../types/report-type";
import { createReport } from "../../../services/report-service";

const useCreateReport = () => {
    const queryClient = useQueryClient();
    const { successToast } = useToast();
    const { setLoading } = useLoadingStore();
    return useMutation({
        mutationFn: (payload: CreateReportType) => createReport(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            console.log(error);
        },
        onSuccess: async (response) => {
            successToast(`Success Create Report`);
            queryClient.invalidateQueries({
                queryKey: ["reports"]
            });
        },
        onSettled: () => {
            setLoading(false);
        }
    });
}

export default useCreateReport;