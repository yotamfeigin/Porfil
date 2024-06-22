const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Computer Science, Bar-Ilan University',
                degree: 'BSc, Computer Science',
                detail: "Currently pursuing a Bachelor's Degree in Computer Science at Bar-Ilan University, expected to graduate in 2024.",
                year: '2021-2024'
            },
            {
                id: 1,
                title: 'Mathematics & Statistics, Tel Aviv University',
                degree: 'Former Student',
                detail: "Studied Mathematics, Statistics, and Computer Science courses at Tel Aviv University.",
                year: '2019-2020'
            },
            
        
        ]
    },

]


export default function handler(req, res) {
    res.status(200).json(background)
}
