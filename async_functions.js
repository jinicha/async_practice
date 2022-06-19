const axios = require('axios');
const Promise = require('bluebird');
const fs = require('fs');
const readFileAsync = Promise.promisify(require('fs').readFile);

module.exports = {
  postData: (url, data) => axios(url, data),
  getData: url => axios.get(url),
  updateData: url => {},
  deleteData: url => {},
  readFile: file => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },
  promisifiedReadFile: readFileAsync,
  writeFile: (file, text) => {},
  promisifiedWriteFile: Promise.promisify(require('fs').writeFile),
  asyncTask1: (val1, val2, duration = 1500) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(val1 + val2), duration)
    })
  },
  asyncTask2: () => {},
  asyncTask3: () => {},
  asyncTask4: () => {},
  asyncTask5: () => new Promise(resolve => setTimeout(() => resolve(console.log('2).')), 2500)),
  asyncTask6: () => new Promise(resolve => setTimeout(() => resolve(console.log('2).')), 2000)),
}