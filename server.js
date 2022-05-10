const express = require('express');
const app = express();
const data = {'secrets': 'info', posts: []};

/* TODO:
Complete the server setup.
Fill out the args.
*/


const arg1 = 'FILL_ME_IN';
const arg2 = 'FILL_ME_IN';
const arg3 = (req, res) => { console.log('Posting ', req.body); res.sendStatus(201) };
const arg4 = 'FILL_ME_IN';
const arg5 = 'FILL_ME_IN';
const arg6 = 'FILL_ME_IN';

// 1). C.
// TODO: Finish CRUD functionality
app.post('/', arg3);
// 2). R.
// TODO: Finish CRUD functionality
app.get('/', arg4);
// 3). U.
// TODO: Finish CRUD functionality
// 4). D.
// TODO: Finish CRUD functionality

app.listen(arg1, arg2);

// lost? See: https://expressjs.com/en/starter/hello-world.html