import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, TimeScale } from 'chart.js';
// import 'chartjs-adapter-date-fns';

// Register the chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    TimeScale
);

const RealTimeChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [
            {
                label: 'ECG Signal',
                data: [], // Initialize with empty data
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                fill: false,
            }
        ]
    });

    // Simulated real-time data update (every 2 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            // Generate random ECG signal value (for demonstration purposes)
            const newSignalValue = Math.floor(Math.random() * 100) + 410; // Range: 410 to 509

            // Update the chart data
            setChartData((prevData) => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: [
                            ...prevData.datasets[0].data,
                            { x: new Date(), y: newSignalValue },
                        ],
                    },
                ],
            }));
        }, 2000); // Update every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute'
                },
                title: {
                    display: true,
                    text: 'Time (s)'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'ECG Signal'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{ height: '400px' }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default RealTimeChart;
