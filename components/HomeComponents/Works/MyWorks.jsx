// components/HomeComponents/Works/MyWorks.js
import React from 'react';
import Image from 'next/image';
import ClosetImage from '../../../public/images/Favicon.webp';

const MyWorks = () => (
    <div className="slide-in-elliptic-top-fwd">
        <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Works</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-8">
            <a href="https://yotam-closet.click" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-4 rounded-lg text-center">
                <Image src={ClosetImage} alt="Yotam's Closet" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
                <h2 className="text-xl font-semibold">Yotam&apos;s Closet</h2>
                <p className="text-sm mt-2">Explore my online clothing store project.</p>
            </a>
        </div>
    </div>
);

export default MyWorks;
