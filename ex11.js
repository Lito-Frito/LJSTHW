// Exercise 11: Functions

const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
}

printPerson('Zed', 44);
printPerson('Fran', 100);
printPerson('Alex', 30);
printPerson('Eve', 35);

console.log('--------------- pets ----------------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

printPet('Zed', 44, 'Mr. Scruffles', 10);
printPet('Fran', 100, 'Crazy', 2);
printPet('Alex', 30, 'Lizzy Lizard', 1);
printPet('Eve', 35, 'Kong The Donkey', 20);


// this part is tough!  brain melting! give it a try
//
console.log('------------------ callback style ----------------');
// cb is a standin for a f(x) which is then created as a f(x) in line 35
// My notes: Here, create a function by assigning cb to the var fancyPet
// Each parameter is listed in parenthesis
// It goes on the stack when the function is called: (name, age).
// The "fat arrow", or =>, says "this going to be a function."
// If the code is 1 line, just type it; if it's multiple lines, use curly braces
// To return a value, then you add 'return value'
const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    cb(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

// notice how I use a function here as the parameter cb?
// My notes: I said in L36 CB is a f(x); L45(name, age) says to jump back to L36
// Then I say, do L46 first as part of CB on L36
// So before I print L37, I add in L46 as additional commands for cb(x)
// Then it does what L37 says
fancyPet('Zed', 44, 'Mr. Scruffles', 10, (name, age) => {
    console.log(`Ooooh fancy ${name} you are ${age} old.`);
});
