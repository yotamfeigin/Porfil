// pages/api/works.js

const works = [
    {
        id: 0,
        title: "Yotam's Closet",
        description: "An online clothing store project built to showcase products with filtering options and a modern UI.",
        link: "https://yotam-closet.click",
        img: '/images/Favicon.webp',
        color: '#bca5e3'
    },
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and expertise.",
        link: "https://github.com/yotamfeigin/portfolio",
        img: '/images/file.jpg',
        color: '#4dd740'
    },
    {
        id: 2,
        title: "Chat Application",
        description: "A real-time chat application built with React, Express.js, and Android Studio. It supports user registration, login, and messaging across web and Android platforms.",
        link: "https://github.com/yotamfeigin/Chat_App" ,
        img: '/images/ChatLogo.png',
        color: '#c00bca'
    },
];

export default function handler(req, res) {
    res.status(200).json(works);
}
