// data obj about a person named Frank
let frank = {
    name: "Frank",
    age: 34,
    eyes: "blue"
}

const frank_talk = (who, words) => {
    console.log(`I am ${who.name} and ${words}.`);
}

frank_talk(frank, "I am talking here!");


// working with that data by putting functions on it
let mary = {
    name: "Mary",
    age: 44,
    eyes: "brown",
    talk: (who, words) => {
        console.log(`I am ${who.name} and ${words}.`);
    }
}

// this is kind of annoying though
mary.talk(mary, "these are some words");
// and this works but that's weird
mary.talk(frank, "I am frank what?");
