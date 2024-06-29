const expertise = [
    {
        id: 0,
        title: 'Unity Development',
        desc: "As a self-taught Unity developer, I've focused on understanding game design, physics, and scripting elements to streamline development and enhance performance. This approach has made my work more efficient and effective."
    },
    {
        id: 1,
        title: 'Full Stack Development',
        desc: 'Experienced with the MERN stack, including projects like a chat application using Node.js and React. Final degree project involves React and TypeScript, focusing on server-side rendering, API integration, and database management.'
    },
    {
        id: 2,
        title: 'Mathematical Thinking',
        desc: 'Strong foundation in Mathematics and Statistics, emphasizing analytical and problem-solving skills crucial for algorithm design, data analysis, and complex programming challenges.'
    },
    {
        id: 3,
        title: 'GitHub and Jira',
        desc: "Basic experience using GitHub for version control (pull requests, issue tracking) and Jira for project management (task assignment, progress tracking) in academic projects."
    }
];


export default function handler(req, res) {
    res.status(200).json(expertise)
}
