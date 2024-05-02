

// pages/dashboard.js
import Link from 'next/link';
import { useState ,useEffect } from 'react';
import TemperatureChart from '../components/TemperatureCard'
import { database } from '../lib/firebase-config';
import patients from '../lib/data/patients';
import PatientCard from '../components/PatientCard';




export default function  Dashboard () {
    const [patients, setPatients] = useState([]);  



    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <Link href="/"
                        className="text-blue-500 hover:text-blue-700 transition-colors">Back to Home
                    </Link>
                </div>
            </header>
            {/* Content expands to fill space, pushing footer down */}
            <main className="flex-1">
              <PatientCard />
            </main>

            {/* Fixed Footer */}
            <footer className="bg-white shadow p-4 text-center">
                <p className="text-sm text-gray-500">© 2024 Health Monitoring System. All rights reserved.</p>
            </footer>
        </div>
    );
}


