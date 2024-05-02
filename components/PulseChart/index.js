// // components/PulseChart.js
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const PulseChart = ({ data }) => {
   

//     return (
//         <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" />
//                 <YAxis label={{ value: 'Pulse (bpm)', angle: -90, position: 'insideLeft' }} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="pulse" stroke="#8884d8" activeDot={{ r: 8 }} />
//             </LineChart>
//         </ResponsiveContainer>
//     );
// };

// export default PulseChart;

// components/PulseChart.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PulseChart = () => {
    // Initialize state with initial data
    const [data, setData] = useState([
        { time: "10:00", pulse: 70 },
        { time: "10:05", pulse: 72 },
        { time: "10:10", pulse: 75 },
        { time: "10:15", pulse: 68 },
        { time: "10:20", pulse: 80 },
        { time: "10:25", pulse: 78 },
        { time: "10:30", pulse: 85 }
    ]);

    // Function to update data dynamically
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
            const latestPulse = Math.floor(Math.random() * 20) + 65;  // Generate random pulse rate
            const newData = [...data, { time: formattedTime, pulse: latestPulse }];

            // Keep only the last 20 data points
            if (newData.length > 10) {
                newData.shift();
            }

            setData(newData);
        }, 2000); // Update data every 5 seconds

        return () => clearInterval(interval); // Cleanup interval
    }, [data]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pulse" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PulseChart;
