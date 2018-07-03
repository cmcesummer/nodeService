const express = require('express');
const userRouter = require('./user.js');

const app = express();

app.use('/', userRouter);

app.use('/user', userRouter)

app.listen(9000, () => console.log('open on 9000 port'))