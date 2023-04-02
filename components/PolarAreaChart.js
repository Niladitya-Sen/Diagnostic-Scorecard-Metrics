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
                color.push("rgba(229, 62, 48, 0.5)")
            } else if (parameters[element] > 3 && parameters[element] <= 7) {
                color.push("rgba(255, 174, 55, 0.5)")
            } else {
                color.push("rgba(27, 195, 87, 0.5)")
            }
        })
        setPlot({
            data: data,
            color: color
        })
    }, [parameters]);

    return (
        <>
            <PolarArea data={{
                labels: labels,
                datasets: [{
                    label: '',
                    data: plot.data,
                    backgroundColor: plot.color,
                }]
            }} options={{
                plugins: {
                    legend: {
                        display: false
                    }
                },
            }} />
        </>
    )
}
