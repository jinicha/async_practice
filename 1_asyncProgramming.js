/* 
There are 3 main ways to handle async programming

1). Callbacks
2). Promises
3). Async / Await

- Each is an upgrade of its predicessor
- Many packages and libraries will use a form of async functionality to perform a task.
- Learn to use the fundemental of each
*/


const axios = require('axios');
const Promise = require('bluebird');
const fs = require('fs');
const db = {query: () => {}}; // assume we're requiring a db's connection obj



// Async Callbacks:

let cb1 = setTimeout(function () {
  console.log('async task');
}, 1000);
// cb1();

let cb2 = setTimeout(() => console.log('async task'), 1000);
// cb2()

// Error First Callbacks:

let cb3 = fs.readFile('file.txt', (err, result) => {
  if (err) {
    // handle err
  } else {
    // handle result
  }
});

let cb4 = db.query('SELECT * FROM movies', (err, res) => {
  if (err) {
    // handle err
  } else {
    // handle result
  }
});


  // Promises:

/* Promises consist of 2 phases and 3 states (pending, fulfilled & rejected)
  Phase 1: Promise Setup - Defines what constitutes a "fullfilled" or "failed"
  Phase 2: Promise Object - Enables flow control handling of "fullfilled" & "failed" scenarios
*/
// Setup
let aPromise = new Promise(function(resolve, reject) {
  let conditionIsTruthy_Or_didAsyncTask = true;
  if (conditionIsTruthy_Or_didAsyncTask) {
    resolve('async value');
  } else {
    reject('err');
  }
})

let aPromise2 = new Promise((resolve) => resolve(''));

// Promise Object
aPromise
  .then((res) => console.log('fulfilled'))
  .catch((err) => console.log('failed'));

aPromise2
  .then(() => console.log())