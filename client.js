/* Treat this as your client code */
const axios = require('axios');
const asyncFns = require('./async_functions.js');
const url = 'http://localhost:3000';
const file = 'file.txt';

const start = () => console.log('1). Start'); // RUN before the async function
const end = () => console.log('3). End'); // RUN after the async function

/* 1). POST data from the url. Should log:
Start
Created data!
End
*/
const postData = () => {
  start();
  asyncFns.postData(url, {bcs: 20})
    .then((res) => console.log('2). Posted data'))
    .then(() => end());
};

/* 2). GET data from the url */ 
const getData = () => {
  start();
  asyncFns.getData(url)
    .then((res) => {
      console.log('2). Got data');
    })
    .then(() => end())
    // .then(end()) // uncomment this line and note the difference when its not called in an anonomous function
};

/* 3). UPDATE data from the url */
/* 4). DELETE data from the url */

// const doAsyncThing = (fn) => {
//   console.log('step1');
//   fn().then(res => console.log(res));
//   console.log('step2');
// };

// doAsyncThing(asyncFns.asyncTask1);
// getData();
// postData();

start();
asyncFns.asyncTask5()
  .then((res) => res)
  // .then((res) => console.log(res))
  .then(() => end());