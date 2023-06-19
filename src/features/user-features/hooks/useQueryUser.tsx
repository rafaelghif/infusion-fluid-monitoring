import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getUsers } from "../../../services/user-serivce";

const useQueryUser = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["users"],
        queryFn: () => getUsers(),
        onError: async (error) => {
            setLoading(false);
        },
        onSettled: async () => {
            setLoading(false);
        },
        refetchOnWindowFocus: false,
        retry: false
    });
}

export default useQueryUser;