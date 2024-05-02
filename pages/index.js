// // pages/index.js

// // import Link from 'next/link';

// // export default function Home() {
// //     return (
// //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //             <div className="text-center p-8 bg-white shadow-md rounded-lg">
// //                 <img src="public\logo.jpg" alt="Health Monitoring System Logo" className="mx-auto h-20 w-auto" />
// //                 <h1 className="text-2xl font-semibold text-gray-900 mt-6">Welcome to Your Health Monitoring System</h1>
// //                 <p className="text-gray-600 text-base mt-4">Monitor and manage your health efficiently and intuitively.</p>
// //                 <Link href="/dashboard" className="mt-6 inline-block bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition-colors">Go to Dashboard
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // }


import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="text-center py-12 md:py-20 bg-blue-500 text-white">
                <h1 className="text-2xl md:text-4xl font-bold ">Optimize Your Health Management</h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg p-4 mb-4">Utilizing cutting-edge technology to track and improve your wellness.</p>
                <Link href="/dashboard" className="mt-4 md:mt-6 bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">Explore Dashboard
                </Link>
            </section>

            {/* Features Section */}
            <section className="p-6 md:p-20 bg-gray-100 text-gray-700">
                <h2 className="text-xl md:text-3xl font-bold text-center">Why Choose Us?</h2>
                <div className="flex flex-col md:flex-row justify-around mt-6">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md m-2">
                        <h3 className="font-semibold">Comprehensive Tracking</h3>
                        <p>Monitor your vitals like heart rate, temperature, and blood pressure in real-time.</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md m-2">
                        <h3 className="font-semibold">Personalized Insights</h3>
                        <p>Get personalized health reports and improvement recommendations based on your data.</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md m-2">
                        <h3 className="font-semibold">24/7 Monitoring</h3>
                        <p>Our support team is available around the clock to ensure your health is always monitored.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="p-6 md:p-20 bg-white text-gray-800">
                <h2 className="text-xl md:text-3xl font-bold text-center">Trusted by Thousands</h2>
                <p className="mt-4 text-base md:text-lg text-center mx-auto max-w-xl">Founded in 2020, our health monitoring system has helped over 10,000 users maintain and improve their health through advanced technology and dedicated support.</p>
            </section>

            {/* Contact Section */}
            <section className="p-6 md:p-20 bg-gray-200 text-gray-800">
                <h2 className="text-xl md:text-3xl font-bold text-center">Get In Touch</h2>
                <div className="mt-4 max-w-md mx-auto">
                    <form action="#" method="POST">
                        <input type="email" name="email" placeholder="Your email" className="p-2 w-full text-gray-800 mb-4"/>
                        <textarea name="message" placeholder="Your message" className="p-2 w-full text-gray-800 mb-4" rows="4"></textarea>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-500 text-white p-4 text-center">
                <p>Copyright © 2024 Health Monitoring System. All rights reserved.</p>
            </footer>
        </div>
    );
}
