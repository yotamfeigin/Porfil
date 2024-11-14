// pages/api/works.js

const works = [
    {
        id: 0,
        title: "Yotam's Closet",
        description: "An online clothing store project built to showcase products with filtering options and a modern UI.",
        link: "https://yotam-closet.click"
    },
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and expertise.",
        link: "https://github.com/yotamfeigin/portfolio"
    },
    {
        id: 2,
        title: "Chat Application",
        description: "A real-time chat application using the MERN stack, enabling users to communicate in a dynamic environment.",
        link: "https://example-chat-app.com" // Replace with the actual link if available
    },
];

export default function handler(req, res) {
    res.status(200).json(works);
}
