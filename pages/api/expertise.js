const expertise = [
    {
        id: 0,
        title: 'Unity Development',
        desc: "I am a self-taught Unity developer with hands-on experience in creating games. Through building my own game, I gained extensive knowledge in game design, physics, and scripting within Unity. Additionally, I worked on a project as a freelancer, which further honed my skills in developing interactive and engaging game elements. My journey with Unity has been both educational and rewarding, equipping me with the skills to tackle various game development challenges.",
    },
    {
        id: 1,
        title: 'Full Stack Development',
        desc: 'During my degree, I have hands-on experience with full stack development, particularly with the MERN stack. I have worked on projects like creating a functional chat application using Node.js as the server and React for the front end with HTML/CSS. Additionally, my final project for my degree involves building an application using React and TypeScript. These experiences have equipped me with a solid understanding of server-side rendering, API integration, and database management.',
    },

    {
        id: 2,
        title: 'Mathematical Thinking',
        desc: 'With a foundation in Mathematics and Statistics from my studies at Tel Aviv University and strongly reinforced by my degree at Bar-Ilan University, I have developed excellent analytical and problem-solving skills. My grades in the mathematics courses at both institutions have been excellent. I have always had a mathematical and analytical mind, which is crucial for algorithm design, data analysis, and tackling complex programming challenges, ensuring efficient and effective solutions in my projects.',
    },
    
    {
        id: 3,
        title: 'GitHub and Jira',
        desc: "I have basic experience with GitHub and Jira, using them for version control and project management in my academic projects. GitHub's pull requests and issue tracking have helped streamline collaboration, while Jira has been useful for task assignment and tracking progress. Though on a smaller scale, these tools have been essential in keeping projects organized and on track.",
    },
  
    
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
