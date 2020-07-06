const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Joi = require('joi');

const firebase = require('firebase').initializeApp({
  //serviceAccount : "./serviceAccountKey.json",
  databaseURL : "https://refarm.firebaseio.com/"
});

var ref = firebase.database().ref().child('Products');
//var usersRef = ref.child('Users');
var products;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));

app.get('/products',(req,res)=>{
	ref.on("value", function(data) {
                   products = (data.val());
                   res.json({
                       status: 'success',
                       message: 'Product details fetched successfully',
                       Products: products
                    });
    });

});



app.listen(3000, () => console.log('Running on Port 3000'));



module.exports = {
    app
};