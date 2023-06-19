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

    return {
        successToast
    }
}

export default useToast;