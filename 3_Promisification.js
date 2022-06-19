/* Promisification: 
http://bluebirdjs.com/docs/api/promisification.html
Converting an Async Function that uses the Error First Callback function, into a promise */

const Promise = require('bluebird');
const fs = require('fs');
const request = require('needle');
const crypto = require('crypto');
const GitHubHandle = 'FILL_ME_IN';



// (1) Asyncronous HTTP request: Callback
const getGitHubProfile = function (user, callback) {
  let url = 'https://api.github.com/users/' + user;
  let options = {
    headers: { 'User-Agent': 'request' },
  };

  request.get(url, options, function (err, res, body) {
    if (err) {
      callback(err, null);
    } else if (body.message) {
      callback(
        new Error('Failed to get GitHub profile: ' + body.message),
        null
      );
    } else {
      callback(null, body);
    }
  });
};

// (1) Asyncronous HTTP request: Promise
const getGitHubProfileAsync = Promise.promisify(getGitHubProfile);

getGitHubProfileAsync(GitHubHandle)
  .then(res => console.log(res))
  .catch(err => console.log('err')); // cleaner?




// (2) Asyncronous token generation: Callback
const generateRandomToken = function (callback) {
  crypto.randomBytes(20, function (err, buffer) {
    if (err) { return callback(err, null); }
    callback(null, buffer.toString('hex'));
  });
};

// (2) Asyncronous token generation: Promise
const generateRandomTokenAsync; // TODO





// (3) Asyncronous file manipulation: Callback
const readFileAndMakeItFunny = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, file) {
    if (err) { return callback(err); }

    var funnyFile = file.split('\n')
      .map(function (line) {
        return line + ' lol';
      })
      .join('\n');

    callback(funnyFile);
  });
};

// (3) Asyncronous file manipulation: Promise
const readFileAndMakeItFunnyAsync; // TODO