import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import {  UpdateUserType, UserInterface } from "../../../types/user-type";
import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";
import useUpdateUser from "../hooks/useUpdateUser";

interface ModalUpdateUserProps {
    isOpen: boolean;
    data?: UserInterface,
    onDidDismiss: () => void;
}

const ModalUpdateUser: React.FC<ModalUpdateUserProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateUserType>({});
    const { mutate } = useUpdateUser();

    const handleInput = (key: keyof UpdateUserType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        if (data) {
            setFormData({ id: data.id, username: data.username, password: data.password, name: data.name, isAdmin: data.isAdmin });
        }
    }, [data]);
    return (
        <Modal title="Update User" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Username" labelPlacement="floating" value={formData?.username} onIonInput={(e) => handleInput("username", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="password" label="Password" labelPlacement="floating" value={formData?.password} onIonInput={(e) => handleInput("password", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonCheckbox checked={formData?.isAdmin} onIonChange={(e) => handleInput("isAdmin", e.detail.checked)}>Is Admin</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateUser;