const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Joi = require('joi');

const firebase = require('firebase').initializeApp({
  serviceAccount : "./serviceAccountKey.json",
  databaseURL : "https://refarm.firebaseio.com/"
});

var ref = firebase.database().ref().child('Products');
var jef;
//var jef = ref.child(req.body.product_category);
var product_details;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));

app.post('/',(req,res)=>{
    const { body } = req;
    const schema = {
    	product_category : Joi.string().required()
    };
 jef = ref.child(req.body.product_category);
    
   const r = Joi.validate(body,schema);
    	console.log(r);

    if(r.error){
    	 res.status(422).json({
                status: 'error',
                message: r.error.details[0].message,
                data: req.body
            });
    }
    else{
    	jef.on("value", function(data) {
                   products = (data.val());
                   res.json({
                       status: 'success',
                       message: 'Product details fetched successfully',
                       Products: products
                    });
    });
    	
    }
   
});


app.listen(3000, () => console.log('Running on Port 3000'));



module.exports = {
    app
};