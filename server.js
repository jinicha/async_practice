const express = require('express');
const app = express();
const data = {'secrets': 'info', posts: []};

/* ASSIGNMENT:
Complete the server setup.
Fill out the args.
Fill out the CRUD functionaity.
*/


// const arg1 = 'FILL_ME_IN';
// const arg2 = 'FILL_ME_IN';
const arg1 = 3000;
const arg2 = () => console.log('listening');
const arg3 = (req, res) => { console.log(data.posts.length); data.posts.push(req.body.postData); res.sendStatus(201) };
const arg4 = (req, res) => res.send(data);
// const arg4 = 'FILL_ME_IN';
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