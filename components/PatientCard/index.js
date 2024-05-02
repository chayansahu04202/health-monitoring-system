import React, { useEffect, useState } from 'react';
import TemperatureChart from "../TemperatureCard";
import { database } from '../../lib/firebase-config';
// import patients from "../../lib/data/patients";
import PulseChart from '../PulseChart';

const dummyData = [
    { time: "10:00", pulse: 70 },
    { time: "10:05", pulse: 72 },
    { time: "10:10", pulse: 75 },
    { time: "10:15", pulse: 68 },
    { time: "10:20", pulse: 80 },
    { time: "10:25", pulse: 78 },
    { time: "10:30", pulse: 85 },
];

const PatientCard =() => {

  const [patients, setPatients] = useState([]);

  // useEffect(() => {
  //     const patientsRef = database.ref('patients'); // Assuming 'patients' is your database node for patient data
  //     patientsRef.on('value', (snapshot) => {
  //         const patientsData = snapshot.val();
  //         const patientList = [];
  //         for (let id in patientsData) {
  //             patientList.push({
  //                 id: id, // Patient ID from Firebase key
  //                 pulseRate: patientsData[id].pulseRate,
  //                 heartRate: patientsData[id].heartRate,
  //                 ecgSignal: patientsData[id].ecgSignal
  //             });
  //         }
  //         setPatients(patientList);
  //     });

  //     return () => patientsRef.off(); // Detach the listener on cleanup
  // }, []);
  return (
    <>
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-10">
        {/* Health overview section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Patient Overview
            </h2>
            <p className="text-gray-600">Patient Name: Arjun </p>
            <p className="text-gray-600">Age: 22</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-100 p-4 rounded-lg text-blue-800">
              <p className="text-sm font-semibold">Body Temperature</p>
              <p className="text-xl font-bold">28 C</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-green-800">
              <p className="text-sm font-semibold">Pulse Rate</p>
              <p className="text-xl font-bold">80 bpm</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg text-purple-800">
              <p className="text-sm font-semibold">ECG Signal</p>
              <p className="text-xl font-bold">Normal</p>
            </div>
          </div>
        </div>
        {/* Chart Section  */}
        <div className="bg-white shadow rounded-lg p-6">
          {/* <TemperatureChart data={patients} /> */}
          <PulseChart data={dummyData} />
        </div>
      </div>
    </>
  );
}

export default PatientCard;
