// import fetch from 'node-fetch'; // works because I added "type": "module" inside of package.json.
const fetch = require('node-fetch');
// const { ... } = require('./async_functions'); // OPTIONAL


// Free APIs to fetch from.
const url_cat = 'https://catfact.ninja/fact'; // random cat facts
const url_userData = 'https://randomuser.me/api/'; // generates random user data
const url_age = 'https://api.agify.io?name='; // guesses the age of a name, Add string to query param. [EX: ...?name=Jake]



/* Our Async Functions:
fetch() <- returns a Promise.
.json() <- chained to a Response Obj, returns a Promise.
*/



        // LESSON 1: Simple Use-case:
//* <- remove & add a '/' to toggle Lesson blocks.
const asyncExampleFn = async function() { // signifies that this function will run asyncronously
  const res = await fetch(url_cat); // Will return a promise
  console.log('Middle');
  // Await pauses the code at this point. It doesnt block the call stack. It looks like normal code, but is asyncronous
  const json = await res.json(); // when the function " .json() " is returning a promise, I can just await it.
  console.log(json);
  console.log('Last');
};
asyncExampleFn();
console.log('First'); // Code will run outside of the
// */

// PRACTICE: Create 3 async functions that fetches data, parses it with the json method and logs it.
          // Use each of the 3 urls

// 1.GetCatData:

// 1.GetNameData:

// 1.GetUserData:








        // LESSON 2: Compare visually:
/*  Async Await is just Syntactic sugar for a Promise.
const compareAsyncMethods = async function() {
  // ASYNC AWAIT
  const res1 = await fetch(url_cat); // Will return a promise
  const json = await res1.json();
  console.log(json);

// VS:

  // PROMISES
  const res2 = fetch(url_cat)
    .then(result => result.json()
    .then(jsonResult => console.log(jsonResult)))
    .catch(console.error);

// VS:

  // CALLBACKS
  const res3 = fetch(url_cat, (err, response) => { // DOESNT work, but you get the picture.
    if (err) {
      console.error(err);
    } else {
      response.json((err, response) => {
        if (err) {
          console.error(err);
        } else {
          console.log(response);
        }
      });
    }
  });
};
// compareAsyncMethods();
// */








      // LESSON 3: CATCHING ASYNC AWAIT ERRORS:
/*
// Try Catch are basic javascript keywords. Heres a basic example of how it works:
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  // console.log(err.message); // "Assignment to constant variable."
};


// To catch ASYNC AWAIT errors, use this:
const catchThisError = async (name) => {
  try {
    const res = await fetch(`https://api.agify.io?name=${name}`);
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error(err.message);
  }
};
catchThisError(''); // run empty for error;
//*/

// PRACTICE: Create a GetData function, that fetches data and returns a json promise. Account for Error handling.
          // Create a senario that will render an error and test out Try Catch error handling.

// 3.GetCatData:

// 3.TryCatchHandling:









      // LESSON 4: CONVERTING PROMISE RETURNS:
/*
// Try handling this returned Promise:
const getData = async (name) => {
  try {
    const res = await fetch(url_age + name);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  };
};


// getData(); // nothing.
// await getData(); // nothing. // Await won't work without being inside of a function.
// console.log(getData()); // logs: "Promise { <pending> }"
// console.log(await getData()); // logs the data.


// PROMISE HANDLED RETURN:
// console.log('1:');
// getData()
//   .then(data => console.log(`2: ${data.age}`))
//   .catch(err => console.error(`2: ${err}`))
//   .finally(() => console.log('3:')); // Works, but its not ideal to mix promises and async await. SO we can use an IIFE


// ASYNC AWAIT HANDLED RETURN:
// (async function () {
//   console.log('1:')
//   try {
//     const data = await getData('jake');
//     console.log(`2: ${data.age}`)
//   } catch (err) {
//     console.error(`2: ${err}`);
//   }
//   console.log('3:')
// })();
//*/

// PRACTICE: Create a GetData function, that fetches data and returns a json promise.
          // Then, Use promises to get cat data, then refactor with async await.

// 4.Promise:

// 4.AsyncAwait:









      // LESSON 5: HANDLE MULTIPLE ASYNC PROMISES AT ONCE:
/*
const getData = async (name) => {
  try {
    const res = await fetch(url_age + name);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  };
};

const getThreeAges = async (name1, name2, name3) => {
  try {

    // OPTION 1:
    const data1 = await getData(name1);// Runs in series, one at a time.
    const data2 = await getData(name2);
    const data3 = await getData(name3);
    console.log([data1.age, data2.age, data3.age]);


    // OPTION 2:
    const data = await Promise.all([ // Runs in parallel, at the same time. Faster.
      getData(name1),
      getData(name2),
      getData('')
    ]);
    console.log(data.map(d => d.age));

  } catch (err) {
    console.error(`ERROR: ${err}`);
  };
};
getThreeAges('Jake', 'Matt', 'Alexandra');
//  */

// PRACTICE: Create a GetData function, that fetches data and returns a json promise.
          // Use async await to make mutliple calls to the cat API in series, then retype in a format that runs them in parallel.

// 5.Series:

// 5.Parellel:



// OPTIONAL: For more practice, use functions that return promises from the async_functions.js file and repeat the lessons.