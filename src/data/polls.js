const polls = [
    {
        id: '45184',
        title: 'What is Your Favourite Programming Language',
        description: 'There are lot of popular programming languages available. Among them what is your favourite?',
        options: [
            { id: '123', value: 'C Programming', vote: 0},
            { id: '345', value: 'Java', vote: 0},
            { id: '8472', value: 'Javascript', vote: 0},
            { id: '72398', value: 'Python', vote: 0}
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '5u21db',
        title: 'Which Frontend Framework Do You Prefer?',
        description: 'Javascript has vast variety of frontend libraries and frameworks. Each and every day we have a new one. Among those which frontend framework you like and prefer others?',
        options: [
            { id: '62897', value: 'Angular', vote: 0},
            { id: '63893', value: 'React', vote: 0},
            {id:'63794', value: 'Vue', vote: 0}
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '68292',
        title: 'Which is best way to create android app?',
        description: "I want to create an android application but I don't understand which technology would be better. There are a lot of technologies available and my application is not so bulky. I need an easy and simple solution, so that I can prototype within no time, Please share your opinion",
        options: [
            { id: '9372', value: 'Java', vote: 0},
            { id: '9462', value: 'Kotlin', vote: 0},
            {id:'9382', value: 'React Native', vote: 0},
            {id:'9641', value: 'Flutter', vote: 0},
            {id:'9065', value: 'Ionic', vote: 0}
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    }
];

export default polls;