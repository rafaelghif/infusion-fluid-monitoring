import { useMutation, useQueryClient } from "react-query";
import { CreateUserType } from "../../../types/user-type";
import { createUser } from "../../../services/user-serivce";
import useToast from "../../../hooks/useToast";
import useLoadingStore from "../../../stores/useLoadingStore";

const useCreateUser = () => {
    const queryClient = useQueryClient();
    const { successToast } = useToast();
    const { setLoading } = useLoadingStore();
    return useMutation({
        mutationFn: (payload: CreateUserType) => createUser(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            console.log(error);
        },
        onSuccess: async (response) => {
            successToast(`Success Create User ${response}`);
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        },
        onSettled: () => {
            setLoading(false);
        }
    });
}

export default useCreateUser;