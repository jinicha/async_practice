const axios = require('axios');
const Promise = require('bluebird');
const fs = require('fs');

module.exports = {
  postData: (url, data) => axios.post(url, data),
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
  writeFile: () => {},
  asyncTask1: (val1, val2, duration = 1500) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(val1 + val2), duration)
    })
  },
  asyncTask2: () => {},
  asyncTask3: () => {},
  asyncTask4: () => {},
  asyncTask5: () => new Promise(resolve => resolve(setTimeout(()=>console.log('2).')), 500)),
}