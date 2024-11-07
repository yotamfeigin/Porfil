import { AiFillCopyrightCircle } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                {/* Email Section */}
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>yotam181999@gmail.com</div>
                </div>

                {/* Social Links Section */}
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/yotamfeigin" target="_blank" rel="noreferrer">
                        <FaGithub className="text-base" />
                    </a>
                    <a href="https://www.linkedin.com/in/yotam-feigin-000762205/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="text-base" />
                    </a>
                 
                </div>
            </div>
        </div>
    );
};

export default Footer;
