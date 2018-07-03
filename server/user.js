const express = require('express');
const Router = express.Router();

Router.get('/init',(req, res) => {
    return res.json({a:1})
})

module.exports = Router;