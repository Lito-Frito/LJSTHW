const var_sucks = () => {
  var var_scope = 10;
  let let_scope = 20;

  console.log(`>>> var_sucks before if: var=${var_scope}, let=${let_scope}`);

  if(true) {
    //  var sucks with scope. Here you update the global value of var_scope
    var var_scope = 100;
    let let_scope = 100;
    console.log(`>>> var_sucks inside if: var=${var_scope}, let=${let_scope}`);
  }
  // Shows the value of var_scope after the if statement changed it
  console.log(`>>> var_sucks after if: var=${var_scope}, let=${let_scope}`);
}

var_sucks();

// -----------------------------------------------------------------------------
// puzzle: how small can you make this?

//  OLD WAY
// const build_adder = (left) => {
//   // do I really need this variable?
//   let left_hand = left;
//   return adder = (right) =>  {
//     // do I really need the return?
//     let result = left_hand + right;
//     return result;
//   }
// }

//  NEW WAY (SHORTENED)
const build_adder = (a) => (b) => a + b;

let add10 = build_adder(10);
let add20 = build_adder(20);

console.log(`test builder 3 + 10 == ${add10(3)}`);
console.log(`test builder 3 + 20 == ${add20(3)}`);
console.log(`test builder 13 + 10 == ${add10(13)}`);
console.log(`test builder 3 + 10 + 20 == ${add10(add20(3))}`);
