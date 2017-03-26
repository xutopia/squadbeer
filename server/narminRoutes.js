const route = require('express').Router();
const path = require('path')
const request = require('request');
const bodyParser = require('body-parser')

route.post('/externalId', (req,res) =>{
	let num = Number(req.body.result)
	let id = `{"external_id": ${num}}`
	console.log( "ID", id )

	request.post({url: "http://fedora-nyc1.laulabs.net:3000/get_beer_totals", body:id  },
		function(error,response,body) {
			console.log("THE BODY IS: ",body);
			console.log("THIS ERROR:",error);
			if (!error && response.statusCode === 200) {            
        	res.send(body);
      		} else {
        	res.json(error);
    	  	}
	});

})

module.exports = route;