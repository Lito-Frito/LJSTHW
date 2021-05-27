const readline = require('readline-sync'); // Done

const say = (prompt) => { // echos a prompt
    console.log(prompt);
}

const die = (message) => { // returns a death message and exits game
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => { // shows your HP and asks you what to do (prompt)
    console.log(`[[You have ${hp} hit points.]]`);
    if(hp <= 0) {
        die("You died!");
    } else {
        return readline.question(prompt + ' ');
    }
}

const door = (hp) => {
    // they have to open the door to get the gold
    // what kind of puzzle will they solve?
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    // console.log(num1+num2);
    let answer = parseInt(readline.question(`What is ${num1} + ${num2}? `));

    if (answer === num1+num2) {
        say("A door magically appears and you instinctively step through it.");
        gold(hp);
    } else {
        die("Your incorrect answer triggered a trap and the room collapsed on you.");
    }
}

const spider = (hp) => {
    // they enter here, and the spider takes 5 hit points
    // if they live then they can run away
    say("You see a ... giant spider!");
    say("It looks really hungry.");
    say("It immediately lashes out at you with a leg and knocks you away.")
    hp = hp - 5;

    console.log(`[[You have ${hp} hit points.]]`);

    if(hp <= 0) {
        die("You died!");
      }

    say("You manage to run away back to that door you found earlier.");
    door(hp);
}

const gold = (hp) => {
    // end of the game they win if they get the gold
    say("You made it!");
    say("You successfully found all the gold!");
    ask(hp, "Congrats! [Press ENTER to exit game]");
}

const rope = (hp) => {
    say("You see a door at the bottom of the well.");
    say("There's also a tunnel you can go through.");
    let ropeChoice = ask(hp,"What do you do, door or tunnel?");

    if (ropeChoice === "door") {
        door(hp);
      } else if (ropeChoice === "tunnel") {
            spider(hp);
      } else {
            say("You can't do that here.");
            rope(hp);
      }
    // they are at the bottom of the well
    // they can go through the door to the gold
    // or go take a wrong turn to the spider
}

const greeting = () => { // Greets player and gets name
  say(`Welcome to "${process.argv[1]}" world!`)
  let name = readline.question("What's your name? ");
  say(`Welcome ${name}!`)

  let adventure = readline.question("Shall we adventure (Y/N)? ");

  if (adventure === "Y") {
      well(hp);
    } else if (adventure === "N") {
          die("You wander around and eventually starve to death!");
    } else {
          say("You can't do that here.");
          die("You wander around and eventually starve to death!");
    }

}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down you see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do, jump or climb?");

    if(next === "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } else {
        say("You can't do that here.");
        well(hp);
    }
}

// setup hit points
let hp = Math.floor(Math.random() * 10) + 1;

// this starts the game
greeting();
