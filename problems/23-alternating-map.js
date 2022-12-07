/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/

function alternatingMap(array, cb1, cb2) {
  let res = [];

  // Christine's Solution
  // for ( let i = 0; i < array.length; i += 2 ) {
  //   let first = array[i];
  //   let second = array[i + 1];

  //   if ( i === array.length - 1 ) {
  //     res.push( cb1( first ) )
  //   } else {
  //     res.push( cb1( first ) )
  //     res.push( cb2( second ) )
  //   }
  // }

  // My Solution
  for ( let i = 0; i < array.length; i++ ) {
    let el = array[i];

    if ( i % 2 === 0 ) {
      res.push( cb1( el ) ) 
    } else {
      res.push( cb2( el ) )
    }
  }

  // ForEach Solution
  // array.forEach((el, i) => {
  //   if (i % 2 === 0) {
  //     res.push(cb1(el))
  //   } else {
  //     res.push(cb2(el))
  //   }
  // })

  return res;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = alternatingMap;
} catch (e) {
  return null;
}