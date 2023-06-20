import { IonButton, IonInput, IonItem } from "@ionic/react";
import { useState } from "react";
import { AuthenticationInterface } from "../../../types/authentication-type";
import useAuthentication from "../hooks/useAuthentication";

const FormLogin: React.FC = () => {
    const [formData, setFormData] = useState<AuthenticationInterface>({ username: "", password: "" });
    const { mutate } = useAuthentication();

    const handleInput = (key: keyof AuthenticationInterface, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <IonItem className="rounded-lg">
                <IonInput type="text" label="Username" labelPlacement="floating" value={formData.username} onIonInput={(e) => handleInput("username", e.detail.value!)} />
            </IonItem>
            <IonItem className="rounded-lg">
                <IonInput type="password" label="Password" labelPlacement="floating" value={formData.password} onIonInput={(e) => handleInput("password", e.detail.value!)} />
            </IonItem>
            <IonButton type="submit" color="light" expand="block">Submit</IonButton>
        </form>
    );
}

export default FormLogin;