const User = require('../Schema/Users');
const Router = require('express').Router();

Router.get('/',(req,res) =>{
   res.send('connected to auth....');
})

module.exports = Router;
