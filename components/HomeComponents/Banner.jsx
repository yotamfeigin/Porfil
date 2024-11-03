import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import Image from 'next/image';

const Banner = () => {
    const typewriterRef = useRef(null);

    const roles = [
        'Graduating CS student',
        'Unity Developer',
        'Full Stack Developer',
        'Junior Programmer',
    ];

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div>
                            <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Welcome to my portfolio!</h1>
                            <div className="py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                <span>
                                    {"<"}
                                    <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                    {">"}{' '}
                                    <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                                        I am {' '}
                                        <span className="inline-block" ref={typewriterRef}>
                                            <Typewriter
                                                options={{
                                                    strings: roles.map(role =>
                                                        `a ${role}`
                                                    ),
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </span>{' '}
                                    {"</"}
                                    <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                    {">"}{' '}
                                </span>
                            </div>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block">
                            <Image
                                src="/images/Wave.gif"
                                alt="emoji"
                                priority
                                quality={100}
                                width={3840} // Actual width
                                height={2160} // Actual height
                                sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 25vw"
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    objectFit: 'cover',
                                }}
                            />

                            {/* Fallback image */}
                            <noscript>
                                <Image
                                    src="/images/Wave.gif"
                                    alt="emoji"
                                    style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover' }}
                                />
                            </noscript>
                        </div>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
};

export default Banner;
