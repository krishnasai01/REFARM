var firebase = require('firebase').initializeApp({
    serviceAccount : "./refarm-firebase.json",
    databaseURL : "https://refarm.firebaseio.com/"
});
/*
var ref = firebase.database().ref().child('Accounts');
var usersRef = ref.child('Users');
var sellersRef = ref.child('Sellers');

var ref0 = usersRef.push({
    Username : "",
    MobileNumber : "",
    Email : ""
});


var ref1 = usersRef.push({
    Username : "Hanna24",
    MobileNumber : "+91-6666666666",
    Email : "hanna24@gmail.com"
});

var ref2 =  usersRef.push({
    Username : "anna01",
    MobileNumber : "+91-5555555555",
    Email : "anna01@gmail.com"
});

var ref3 = sellersRef.push({
    Username : "",
    MobileNumber : "",
    Email : ""
});


var ref4 = sellersRef.push({
    Username : "Rocky123",
    MobileNumber : "+91-7777777777",
    Email : "rocky123@gmail.com"
});

var ref5 = sellersRef.push({
    Username : "mama99",
    MobileNumber : "+91-1111111111",
    Email : "mama99@gmail.com"
}).then(function (res){
    console.log("Pushed All");
});

console.log(ref.toString());


var firebase = require('firebase').initializeApp({
    serviceAccount : "./refarm-firebase.json",
    databaseURL : "https://refarm.firebaseio.com/"
});

var ref = firebase.database().ref().child('Products');
var usersRef = ref.child('Users');
var sellersRef = ref.child('Sellers');

var ref0 = usersRef.push({
    Username : "",
    MobileNumber : "",
    Email : ""
});
*/
var ref = firebase.database().ref().child('Orders');
ref.orderByKey().equalTo("-MBE413NM6j22o0Sr0oC").on('child_added' , (snap) =>{
    console.log(snap.val().Number_of_items,snap.val().Order_ID);
});
