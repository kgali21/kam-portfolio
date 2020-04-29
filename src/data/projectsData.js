const projects = [
    {
        project: 'Bad Ass Maze Game',
        image: '../../public/maze.png',
        description: 'Full-Stack game that uses React and P5.js on the frontend, and uses Socket.io and the Maze API on the backend. Users must start a game with their name, which then creates a lobby with a unique id using Socket.io, they then can send that id to up to 7 other users. Players then race to the center of a randomly generated maze generated by the Maze API and rendered via P5.js, when one player wins, it then sends a winning/losing message to all other players. My duties were to create most of the React components and work on the design of the app.',
        frontendTech: 'React and P5.js',
        backendTech: 'Socket.io and Maze API',
        site: 'https://maze-race.netlify.app/',
        github: 'https://github.com/Team-Amazing-Race' 
    },
    {
        project: 'The Sanchez Personality Experiment',
        image: '../../public/sanchez.png',
        description: 'A complete reimagining of a Meyer’s Briggs personality survey, but using a Rick and Morty api to add pop culture flair. It also combines MBTI personality traits for 16 different characters, and uses weights to assign those characters. We used PostgresQl to seed our database with characters, quiz questions and answers, and MBTI personality types already connected to certain characters. Bcrypt was also used on the backend to allow us to assign users to their personal quiz performances. Vanilla javascript and css animations were used for the front end, and Chart.js was used to render the graph that shows all time stats of each character.',
        frontendTech: 'Vanilla Javascript, Chart.js, HTML, and CSS Animations',
        backendTech: 'brcypt, express, and jsonwebtoken',
        site: 'https://c-137-mbti-quiz.herokuapp.com/auth.html?redirect=%2F',
        github: 'https://github.com/Team-C-137/TheSanchezPersonalityExperiment'
    },
    {
        project: 'Jabba Dice',
        image: '../../public/jabba.png',
        description: 'This is a game that is based on the dice game CeeLo, which a user needs to win a dice roll based on points. It has 3 bosses that you must defeat using some fun pop culture references. Using Vanilla Javascript, we were able to create a SPA that allowed the user to enter a name which used local storage, which was also used to be able to go to the next boss or back to the start based on the users choice.',
        frontendTech: 'Vanilla Javascript, CSS, HTML',
        backendTech: 'Vanilla Javascript',
        site: 'https://team-jabba.github.io/html/coverpage.html',
        github: 'https://github.com/team-jabba/team-jabba.github.io'
    },
]

export default projects;
