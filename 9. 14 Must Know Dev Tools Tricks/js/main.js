const dogs = [
    {
        name:  "Lucho",
        age:  6
    },
    {
        name:  "Manchas",
        age:  7
    }
]

const p = document.querySelector('p');
function makeGreen() {

    p.style.color = "#BADA55";
    p.style.fontSize =  "50px";
}

console.log("Hi, I'm a regular Console comment.");

console.log("Hi, I'm a %s Console comment.", "Interpolar");

console.log('%c Hi, I am a style Console comment.', 'font-size:10px; background: green;');

console.warn("Hi, I'm a warning Console comment.");

console.error("Holy Moly, Hi, I'm an ERROR Console comment.");

console.info("Hi, I'm a info Console comment.");

console.assert(1 === 2, "Hi, I'm a Testing Console comment.");

console.clear();

console.log(p);
console.dir(p);

console.clear();

dogs.forEach(dog => {
    console.group(dog.name);
    console.log(`This is: ${dog.name} and he is: ${dog.age} years old, in human years, he is: ${dog.age * 2} years old.`);
    console.groupEnd(dog.name);
});

console.count("Lucho");
console.count("Lucho");
console.count("Lucho");
console.count("Lucho");
console.count("Lucho");
console.count("Lucho");

console.time('Fetching Data');
fetch('https://api.github.com/users/villalbaluis')
    .then(data => data.json())
    .then(data  => {
        console.timeEnd('Fetching Data');
        console.table(data);
    });

console.table(dogs);
