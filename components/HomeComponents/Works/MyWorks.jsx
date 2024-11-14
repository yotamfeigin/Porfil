import React from 'react';
import Image from 'next/image';
import ClosetImage from '../../../public/images/Favicon.webp';
import ParagraphSkeleton from '../../Common/ParagraphSkeleton';
import { useQuery } from "react-query";
import axios from "axios";

const MyWorks = () => {
    const { isLoading, error, data: worksData } = useQuery('works', () =>
        axios.get('/api/works')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching works:', error);
                throw new Error('Failed to fetch works data');
            })
    );

    return (
        <div className="slide-in-elliptic-top-fwd">
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Works</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-8 group" >
                {isLoading ? (
                    [1, 2, 3].map((_, index) => (
                        <ParagraphSkeleton key={index} className="space-y-2 p-8" />
                    ))
                ) : (
                    worksData?.map((work, index) => (
                        <a
                            key={index}
                            href={work.link || "https://yotam-closet.click"}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                            backgroundImage: `url(${ClosetImage.src})`,
                            backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="relative text-white p-4 rounded-lg text-center shadow-pop-tl transition transform duration-300 ease-in-out"
                            >
                            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                                <h2 className="text-xl font-semibold">{work.title || "Yotam's Closet"}</h2>
                                <p className="text-sm mt-2">{work.description || "Explore my online clothing store project."}</p>
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyWorks;
