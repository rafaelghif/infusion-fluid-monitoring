import { useIonToast } from "@ionic/react";

const useToast = () => {
    const [present] = useIonToast();

    const successToast = (message: string) => {
        present({
            message,
            position: "bottom",
            color: "success",
            duration: 2000
        });
    }

    const errorToast = (message: string) => {
        present({
            message,
            position: "middle",
            color: "danger",
            duration: 3000
        });
    }

    return {
        successToast,
        errorToast
    }
}

export default useToast;