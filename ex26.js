let x = [1,2,3,4];
x.map((i) => i + 10);
// [ 11, 12, 13, 14 ]

let xx = [1,2,3,4];
// This is saying 1*2*3*4 which is 24; you need the accumulator
xx.reduce((acc, i) => acc *= i);
// 24

let xxx = [0, 1,2,3,4];
xxx.find((i) => i == 3);
// 3
xxx.find((i) => i);
// 1; this is because == allows for 1 as TRUE

let xxxx = [1,2,3,4];
xxxx.filter((i) => i % 2 == 0);
// [ 2, 4 ]

// ----------------------------------------------------------------------------
let pets = [
  {name: 'Yeller', type: 'Dog', age: 12},
  {name: 'Akumano', type: 'Japanese Bobtail Cat', age: 2},
  {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
  {name: 'James', type: 'Gecko', age: 2},
]

let ages_only = pets.map(pet => pet.age);

let total_age = ages_only.reduce((acc, age) => acc += age);

let meaw = pets.find(pet => pet.name == 'Meaw Peesard');

let old_animals = pets.filter(pet => pet.age > 10);
let young_animals = pets.filter(pet => pet.age <= 10);

console.log("Animal Ages:", ages_only);

console.log("Total Age:", total_age);

console.log("Meaw is:", meaw.age);

console.log("\nOld Animals:");
old_animals.forEach(pet => {
  console.log(`\t${pet.name} is a ${pet.age} old ${pet.type}.`);
});

console.log("\nYoung Animals:");
for(let pet of young_animals) {
  console.log(`\t${pet.name} is a ${pet.age} old ${pet.type}.`);
}
