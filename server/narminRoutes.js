const route = require('express').Router();
const path = require('path')
const request = require('request');

route.post('/externalId', (req,res) =>{
	console.log("MORE LIFE", req.body.str);
})

module.exports = route;