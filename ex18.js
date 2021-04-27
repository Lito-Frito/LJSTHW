exports.fruit = [
    ['Apples', 12, 'AAA'], ['Oranges', 1, 'B'],
    ['Pears', 2, 'A'], ['Grapes', 14, 'UR']];

exports.cars = [
    ['Cadillac', ['Black', 'Big', 34500]],
    ['Corvette', ['Red', 'Little', 1000000]],
    ['Ford', ['Blue', 'Medium', 1234]],
    ['BMW', ['White', 'Baby', 7890]]
];

exports.languages = [
    ['Python', ['Slow', ['Terrible', 'Mush']]],
    ['JavaSCript', ['Moderate', ['Alright', 'Bizarre']]],
    ['Perl6', ['Moderate', ['Fun', 'Weird']]],
    ['C', ['Fast', ['Annoying', 'Dangerous']]],
    ['Forth', ['Fast', ['Fun', 'Difficult']]],
];

// Solutions
// FRUIT:
// ex18.fruit[0][1]
// ex18.fruit[0][2]
// ex18.fruit[1][1] + ex18.fruit[2][1]
// ex18.fruit[1][0]
// ex18.fruit[3][0]
// ex18.fruit[3][1]
// ex18.fruit[0][0]

// CARS:
// ex18.cars[0][1][1]
// ex18.cars[1][1][0]
// ex18.cars[2][1][2]
// ex18.cars[3][1][0]
// ex18.cars[3][1][2]
// ex18.cars[0][1][0]
// ex18.cars[0][1][2]
// ex18.cars[2][1][0]
