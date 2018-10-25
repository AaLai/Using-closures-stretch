// var countdownGenerator = function (x) {
//   var timer = x;

//   return function() {
//     if (timer > 0) {
//       timer -= 1
//       return console.log(`T-minus ${timer + 1}...`);
//     }
//     else if ( timer === 0) {
//       timer -= 1;
//       return console.log(`Blast Off!`);
//     }
//     else if (timer < 0) {
//       return console.log(`Rockets already gone, bub!`);
//     }
//   }
// };

var countdownGenerator = function (x) {

  return function() {
    if (x > 0) {
      x -= 1
      return console.log(`T-minus ${x + 1}...`);
    }
    else if ( x === 0) {
      x -= 1;
      return console.log(`Blast Off!`);
    }
    else if (x < 0) {
      return console.log(`Rockets already gone, bub!`);
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!