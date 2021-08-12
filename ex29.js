let pets = [
     {name: 'Yeller', type: 'Dog', age: 12},
     {name: 'Akumano', type: 'Japanese Bobtail Cat', age: 2},
     {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
     {name: 'James', type: 'Gecko', age: 2},
   ]

   const young_pets = (pet) => {
     return pet.age <= 10;
   }

   const age_pets = (pet) => {
     return [pet.name, pet.age + 10];
   }

   const name_age = (pet) => {
     return `${pet[0]} is ${pet[1]}`;
   }

   const debug = (msg) => {
     console.log(msg);
     return msg;
   }

   // This is later ref on L39
   const tee = (result, data, cb) => {
     var side = (input) => {
       cb(input, result, data);
       return input;
     }

     return side;
   }

   let owned_pets = [];
   // AOT takes in an array, "zed" (which is passed to d), and a f(x).
   // That partial f(x) takes i (input or 'pet'), r (for result) which is the
   // arr, and d for data input (which takes the place of "zed").
   const add_owner_tee = tee(owned_pets, 'Zed', (i, r, d) => {
     r.push({pet: i, owner: d});
   });

   let age_young_animals = pets.filter(young_pets)
     .map(add_owner_tee)
     .map(age_pets)
     .map(name_age);

   console.log("-- Pets with Owners:");
   owned_pets.forEach(debug);

   console.log("-- Young Animals:");
   age_young_animals.forEach(debug);
