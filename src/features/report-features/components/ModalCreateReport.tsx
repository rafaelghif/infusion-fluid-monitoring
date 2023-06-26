import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { IonButton, IonInput, IonItem } from "@ionic/react";
import { CreateReportType } from "../../../types/report-type";
import useCreateReport from "../hooks/useCreateReport";

interface ModalCreateReportProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateReport: React.FC<ModalCreateReportProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateReportType>({ nurseName: "", patientName: "", refillDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, weight: 0 });
    const { mutate } = useCreateReport();

    const handleInput = (key: keyof CreateReportType, value: string | number) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({ ...formData, refillDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` });
        onDidDismiss();
        setFormData({ nurseName: "", patientName: "", refillDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, weight: 0 });
    }
    return (
        <Modal title="Create Report" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Nurse Name" labelPlacement="floating" value={formData.nurseName} onIonInput={(e) => handleInput("nurseName", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Patient Name" labelPlacement="floating" value={formData.patientName} onIonInput={(e) => handleInput("patientName", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Weight" labelPlacement="floating" value={formData.weight} onIonInput={(e) => handleInput("weight", e.detail.value!)} />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateReport;