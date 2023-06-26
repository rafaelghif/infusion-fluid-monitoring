import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { CreateUserType } from "../../../types/user-type";
import useCreateUser from "../hooks/useCreateUser";
import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";

interface ModalCreateUserProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateUser: React.FC<ModalCreateUserProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateUserType>({ name: "", username: "", password: "", isAdmin: false });
    const { mutate } = useCreateUser();

    const handleInput = (key: keyof CreateUserType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }
    return (
        <Modal title="Create User" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Username" labelPlacement="floating" value={formData.username} onIonInput={(e) => handleInput("username", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="password" label="Password" labelPlacement="floating" value={formData.password} onIonInput={(e) => handleInput("password", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData.name} onIonInput={(e) => handleInput("name", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonCheckbox checked={formData.isAdmin} onIonChange={(e) => handleInput("isAdmin", e.detail.checked)}>Is Admin</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateUser;