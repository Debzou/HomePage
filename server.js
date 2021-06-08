const express = require ('express'); 
const app = express(); 
require('dotenv').config()

app.set('views', __dirname + '/views');

app.get ("/", (req,res) => {
	res.render ( "Accueil.ejs" );	
	} );

app.listen(process.env.PORT , () => {
	console.log (`listenning on port ${process.env.PORT}`);
} );

app.use('/public', express.static(__dirname + '/public'));