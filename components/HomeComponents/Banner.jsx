import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import Image from 'next/image';

const Banner = () => {
    const typewriterRef = useRef(null);

    const roles = [
        'Computer Science Graduate',
        'Unity Developer',
        'Full Stack Developer',
        'Junior Programmer',
    ];

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex justify-between items-center">

                    {/* Left Side: Text */}
                    <div className="flex flex-col items-start h-full justify-between">
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold tracking-in-expand">
                            Hey there,<span className="block">Welcome to my portfolio!</span>
                        </h1>

                        <div className="mb-4 py-4 font-cascadia-normal text-Snow text-xxs lg:h-auto">
                            <span>
                                {"<"}
                                <span className="text-Green sm:text-base xl:text-lg font-bold">p</span>
                                {">"}{' '}
                                <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                                    I am {' '}
                                    <span className="inline-block" ref={typewriterRef}>
                                        <Typewriter
                                            options={{
                                                strings: roles.map(role => `a ${role}`),
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </span>{' '}
                                {"</"}
                                <span className="text-Green sm:text-base xl:text-lg font-bold">p</span>
                                {">"}{' '}
                            </span>
                        </div>
                    </div>

                    {/* Right Side: GIF */}
                    <div className="w-36 h-40 relative roll-in-blurred-left">
                        <Image
                            src="/images/Wave.gif"
                            alt="emoji"
                            priority
                            quality={100}
                            width={1920}
                            height={1080}
                            sizes="(max-width: 768px) 30vw, 15vw"
                            className="object-cover"
                        />

                        {/* Fallback image */}
                        <noscript>
                            <Image
                                src="/images/Wave.gif"
                                alt="emoji"
                                width={1920}
                                height={1080}
                                className="object-cover"
                            />
                        </noscript>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
};

export default Banner;
