import { isPlatform } from "@ionic/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface RadialChartProps {
    series: number[];
}

const RadialChart: React.FC<RadialChartProps> = ({ series }) => {
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
    return (
        <ReactApexChart type="radialBar" options={options} series={series} width={isPlatform("android") ? 600 : 900} />
    );
}

export default RadialChart;