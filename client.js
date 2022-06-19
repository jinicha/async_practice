const axios = require('axios');
const Promise = require('bluebird');
const asyncFns = require('./async_functions.js');
const url = 'http://localhost:3000';
const file = 'file.txt';

const start = () => console.log('1). Start');               // RUN before the async function
const mid = (action = '') => console.log('2). ' + action); // RUN on the async function
const end = () => console.log('3). End');                 // RUN after the async function



/* 1). POST data to the url. Should log:
1). Start
2). Created data
3). End
*/
const postData = () => {
  start();
  asyncFns.postData(url, { dummyDataK: 'dummyDataV' })
    .then((res) => console.log('2). Created data', res))
    .then(() => end())
    .catch(err => { console.log(err, 'err in postData')});
};

/* 2). GET data from the url */
const getData = () => {
  start();
  asyncFns.getData(url)
    .then(res => console.log('2). Got data'))
    .then(end)
    .catch(err => { console.log(err, 'err in getData') });
};

/* 3). UPDATE data from the url */
/* 4). DELETE data from the url */

/* 5). */
asyncFns.promisifiedReadFile(file).then(console.log)

/* 6). Tinker with other async functions */
const task5 = () => {
  start();
  asyncFns.asyncTask5()
    .then((res) => res)
    .then(() => end()); // setTimeout wont work the same.
}

/* Test Functions */
// postData();
// getData();
// task5();
