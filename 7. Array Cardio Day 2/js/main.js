const people = [
    {
        name: "Albert",
        year: 1955
    },
    {
        name: "Marie",
        year: 1934
    },
    {
        name: "Isaac",
        year: 1727
    },
    {
        name: "Charles",
        year: 2020
    },
    {
        name: "Nikola",
        year: 1943
    },
    {
        name: "Stephen",
        year: 2018
    },
    {
        name: "Galileo",
        year: 1642
    },
    {
        name: "Ada",
        year: 1852
    },
    {
        name: "Richard",
        year: 1988
    }
];

const comments = [
    {
        text: "Hello",
        id: 1955
    },
    {
        text: "i'm Luis",
        id: 1934
    },
    {
        text: "I'm just",
        id: 1727
    },
    {
        text: "Trying to",
        id: 1882
    },
    {
        text: "Forget",
        id: 1943
    },
    {
        text: "What happen",
        id: 2018
    },
    {
        text: "Then",
        id: 1642
    },
    {
        text: "Please Help",
        id: 1852
    },
    {
        text: "Me Out",
        id: 1988
    }
];

// Check if some of the people is Adult.
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

// Check if  ALL the people are Adults.
const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

// Find the comment with the ID specified.
const comment = comments.find(comment => (comment.id === 1852));

// Find the Index of the comment specified, the Delete It.
const index = comments.findIndex(comment => (comment.id === 1852));
comments.splice(index, 1);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.log({isAdult});
console.log({allAdult});
console.log({comment});
console.table(comments);
console.table(newComments);
