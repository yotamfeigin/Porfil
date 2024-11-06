// pages/api/background.js

const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Computer Science, Bar-Ilan University',
                degree: 'BSc, Computer Science',
                detail: "Graduated with a Bachelor's Degree in Computer Science from Bar-Ilan University. Maintained a GPA of 85+, with strong performance in advanced algorithmic and mathematics courses.",
                year: '2021-2024'
            },
            {
                id: 1,
                title: 'Mathematics & Statistics, Tel Aviv University',
                degree: 'Former Student',
                detail: "Completed foundational courses in mathematics and statistics at Tel Aviv University before focusing on computer science.",
                year: '2019-2020'
            },
            {
                id: 2,
                title: 'High School, Blich',
                degree: 'High School Diploma with Excellence',
                detail: "Graduated with excellence in Mathematics (5 units), Physics (5 units), English (5 units), and Robotics (5 units).",
                year: '2013-2017'
            }
        ],
        expCards: [
            {
                id: 0,
                title: 'Freelance Unity Programmer',
                role: 'Unity Developer',
                detail: "Worked as a freelance Unity programmer during my degree, developing game functionality and implementing interactive features in C#.",
                year: '2023-2024'
            },
            {
                id: 1,
                title: 'Private Tutor',
                role: 'Tutor in Mathematics, Physics, and Computer Science',
                detail: "Provided personalized tutoring sessions for high school and university students, focusing on core concepts in Mathematics, Physics, and Computer Science.",
                year: '2019-Present'
            },
            {
                id: 2,
                title: 'Liquor Store Manager',
                role: 'Store Manager',
                detail: "Managed inventory, orders, and daily operations at a liquor store, demonstrating adaptability and organizational skills.",
                year: '2019-2020'
            },
            {
                id: 3,
                title: 'Dog Sitter',
                role: 'Animal Caretaker',
                detail: "Responsible for the well-being and safety of pets while clients were away, ensuring a comfortable environment for each animal.",
                year: '2020-Present'
            }
        ]
    }
];

// Default export of a function
export default function handler(req, res) {
    res.status(200).json(background);
}
