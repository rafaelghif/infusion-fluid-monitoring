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

    const errorToast = (message: string, duration: number = 3000, position: "middle" | "bottom" | "top" = "middle") => {
        present({
            message,
            position: position,
            color: "danger",
            duration: duration
        });
    }

    return {
        successToast,
        errorToast
    }
}

export default useToast;