import { ApexOptions } from "apexcharts";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { database } from "../../../libs/firebase";

const RadialChart: React.FC = () => {
    const [series, setSeries] = useState<number[]>([0]);
    const options: ApexOptions = {
        chart: {
            height: 250,
            type: "radialBar",
            toolbar: {
                show: true
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: "75%",
                    background: "#fff",
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    },
                },
                track: {
                    background: "#fff",
                    strokeWidth: "67%",
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: "#888",
                        fontSize: "17px"
                    },
                    value: {
                        color: "#111",
                        fontSize: "36px",
                        show: true,
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#ABE5A1"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Percent"]
    }
    useEffect(() => {
        let unsubscribe = onSnapshot(doc(database, "measurement", "data"), (doc) => {
            const data = doc.data();
            setSeries([data?.value]);
        });

        return () => unsubscribe();
    }, []);
    return (
        <ReactApexChart type="radialBar" options={options} series={series} height={550} />
    );
}

export default RadialChart;