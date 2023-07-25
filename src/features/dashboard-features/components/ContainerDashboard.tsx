import { IonSpinner } from "@ionic/react";
import { onSnapshot, doc } from "firebase/firestore";
import { Suspense, lazy, useEffect, useState } from "react"
import { database } from "../../../libs/firebase";

const RadialChart = lazy(() => import("./RadialChart"));

const ContainerDashboard: React.FC = () => {
    const [series, setSeries] = useState<number[]>([0]);
    const [background, setBackground] = useState<string>("bg-white dark:bg-[#121212]");
    useEffect(() => {
        let unsubscribe = onSnapshot(doc(database, "measurement", "data"), (doc) => {
            const data = doc.data();
            setSeries([(data?.value / 500) * 100]);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (series[0] <= 10) {
            setBackground("blinking-background");
        } else {
            setBackground("bg-white dark:bg-[#121212]");
        }
    }, [series]);
    return (
        <div className={`flex items-center justify-center w-screen h-full ${background}`}>
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <RadialChart series={series} />
            </Suspense>
        </div>
    );
}

export default ContainerDashboard;