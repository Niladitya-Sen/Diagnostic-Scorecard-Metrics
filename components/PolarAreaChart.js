import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // !very important without this chart will not work

export default function PolarAreaChart({ parameters }) {
    const [plot, setPlot] = useState({
        color: [],
        data: []
    });
    const labels = [
        'Originality',
        'IP_Protection',
        'Global_Patentability',
        'Concept',
        'Development',
        'Production_Feasibility',
        'Money',
        'Business',
        'Financial',
        'Customer',
        'Market',
        'Product'
    ];
    let color = [];
    let data = [];
    useEffect(() => {
        labels.forEach(element => {
            data.push(parameters[element]);
            if (parameters[element] <= 3) {
                color.push("rgba(229, 62, 48, 0.7)")
            } else if (parameters[element] > 3 && parameters[element] <= 7) {
                color.push("rgba(255, 174, 55, 0.7)")
            } else {
                color.push("rgba(27, 195, 87, 0.7)")
            }
        })
        setPlot({
            data: data,
            color: color
        })
    }, [parameters]);

    const thresholdLines = {
        id: "thresholdLines",
        afterDatasetsDraw(chart) {
            const { ctx, chartArea: { top }, scales: { r } } = chart;

            const trueHeight = r.yCenter - top;
            const radius = trueHeight / r.end;
            const angle = Math.PI / 180;

            for (let i = 1; i <= 10; i++) {
                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(39, 39, 39, 0.15)';
                ctx.arc(r.xCenter, r.yCenter, radius * i, angle * 0, angle * 360, false);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        }
    }

    return (
        <>
            <div id='pieLabels' className='absolute hidden'>
                <p className='text-xs translate-x-[12.5rem] translate-y-[4rem] rotate-[-76deg]'>
                    Originality ({parameters["Originality"]})
                </p>
                <p className=' text-xs translate-x-[17rem] translate-y-[6rem] rotate-[-48deg] '>
                    IP Protection ({parameters["IP_Protection"]})
                </p>
                <p className=' text-xs translate-x-[20rem] translate-y-[9rem] rotate-[-17deg]'>
                    Global Patentability ({parameters["Global_Patentability"]})
                </p>
                <p className=' text-xs translate-x-[21rem] translate-y-[13.5rem] rotate-[12deg]'>
                    Concept ({parameters["Concept"]})
                </p>
                <p className=' text-xs translate-x-[18rem] translate-y-[17rem] rotate-[42deg]'>
                    Development ({parameters["Development"]})
                </p>
                <p className=' text-xs translate-x-[12.5rem] translate-y-[18rem] rotate-[74deg]'>
                    Production Feasibility ({parameters["Production_Feasibility"]})
                </p>
                <p className=' text-xs translate-x-[8rem] translate-y-[15rem] rotate-[-78deg] '>
                    Money ({parameters["Money"]})
                </p>
                <p className=' text-xs translate-x-[5rem] translate-y-[12rem] rotate-[-44deg] '>
                    Business ({parameters["Business"]})
                </p>
                <p className=' text-xs translate-x-[3rem] translate-y-[7.5rem] rotate-[-23deg] '>
                    Financial ({parameters["Financial"]})
                </p>
                <p className=' text-xs translate-x-[4rem] translate-y-[3rem] rotate-[13deg]' >
                    Customer ({parameters["Customer"]})
                </p>
                <p className=' text-xs translate-x-[6.5rem] translate-y-[0] rotate-[40deg] '>
                    Market ({parameters["Market"]})
                </p>
                <p className=' text-xs translate-x-[7.5rem] translate-y-[-7rem] rotate-[-107deg]' >
                    Product ({parameters["Product"]})
                </p>
            </div>
            <PolarArea className='relative -z-10' data={{
                    labels: labels,
                    datasets: [
                        {
                            data: plot.data,
                            backgroundColor: plot.color,
                        },
                        {
                            data: [10],
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderWidth: 0,
                            animations: null
                        }
                    ],
                }} options={{
                    scales: {
                        r: {
                            ticks: {
                                display: false
                            }
                        }
                    },
                    interaction: {
                        mode: []
                    },
                    plugins: {
                        tooltip: {
                            enabled: false,
                        },
                        legend: {
                            display: false
                        },
                    }
                }} plugins={[thresholdLines]} />
            </>
            )
}
