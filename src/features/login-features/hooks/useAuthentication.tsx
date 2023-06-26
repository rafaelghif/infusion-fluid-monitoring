import { useMutation } from "react-query";
import useToast from "../../../hooks/useToast";
import useLoadingStore from "../../../stores/useLoadingStore";
import { authentication } from "../../../services/authentication-service";
import { AuthenticationInterface } from "../../../types/authentication-type";
import { useHistory } from "react-router";
import useUserStore from "../../../stores/useUserStore";
import useAuthStore from "../../../stores/useAuthStore";
import { updateToken } from "../../../services/token-service";
import { getToken } from "../../../services/local-storage-service";

const useAuthentication = () => {
    const history = useHistory();
    const token = getToken();
    const { errorToast } = useToast();
    const { setUser } = useUserStore();
    const { loginUser } = useAuthStore();
    const { setLoading } = useLoadingStore();

    return useMutation({
        mutationFn: (payload: AuthenticationInterface) => authentication(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error: any) => {
            errorToast(error.message);
        },
        onSuccess: async (response) => {
            setUser(response);
            await updateToken(token!, response.id)
            loginUser();
        },
        onSettled: (_, err) => {
            setLoading(false);
            if (err === null) {
                history.replace("/home");
            }
        }
    });
}

export default useAuthentication;