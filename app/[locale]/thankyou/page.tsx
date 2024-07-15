import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-[ghostwhite]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <center><Image src='/check-one.png' alt='check' width={60} height={60}/></center>
        <h1 className="text-2xl mt-8 text-gray-800 text-center font-bold mb-4">Submission Recieved</h1>
        <p className="text-gray-600 text-center mb-8">Your request has been received. We would get back to you shortly.</p>
        <Link href="/">
         <button className="bg-blue-700 text-white py-2 px-4 w-full rounded">
             Back to Our Website
         </button>
          
        </Link>
      </div>
    </div>
  );
}

export default Page;
