/* What is a Promise?
It's an object.

How do we know?
*/

const axios = require('axios');
const Promise = require('bluebird');
const fs = require('fs');
const db = { query: () => { } }; // assume we're requiring a db's connection obj


// Lets break down a promise set up:


let promiseCallBack = function (resolve, reject) {
  let val = true;
  // async task 
  setTimeout(function() {
    if (val) {
    // return fullfilled value into resolve
      resolve(val)
    } else {
      // return error value into reject
      reject(val)
    }
  }, 1500)
};


let promiseInstance = new Promise(promiseCallBack);

promiseInstance.then(() => console.log('Promise fulfilled'));