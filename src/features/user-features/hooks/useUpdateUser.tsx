import { useMutation, useQueryClient } from "react-query";
import { UpdateUserType } from "../../../types/user-type";
import { updateUser } from "../../../services/user-service";
import useToast from "../../../hooks/useToast";
import useLoadingStore from "../../../stores/useLoadingStore";

const useUpdateUser = () => {
    const queryClient = useQueryClient();
    const { successToast } = useToast();
    const { setLoading } = useLoadingStore();
    return useMutation({
        mutationFn: (payload: UpdateUserType) => updateUser(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            console.log(error);
        },
        onSuccess: async (response) => {
            successToast(`Success Update User ${response}`);
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        },
        onSettled: () => {
            setLoading(false);
        }
    });
}

export default useUpdateUser;