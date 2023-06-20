import { useMutation } from "react-query";
import useToast from "../../../hooks/useToast";
import useLoadingStore from "../../../stores/useLoadingStore";
import { authentication } from "../../../services/authentication-service";
import { AuthenticationInterface } from "../../../types/authentication-type";
import { useHistory } from "react-router";
import useUserStore from "../../../stores/useUserStore";
import useAuthStore from "../../../stores/useAuthStore";

const useAuthentication = () => {
    const history = useHistory();
    
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