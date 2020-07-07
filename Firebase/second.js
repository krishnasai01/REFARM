//Collecting queries in firebase 
var firebase = require('firebase').initializeApp({  //Initializing Firebase
    serviceAccount : "./fireb-1d147-23f9534f4c62.json", //service account key which is downloaded and added to the project
    databaseURL : "https://fireb-1d147.firebaseio.com/" //database URL
});
//Adding Data
var ref = firebase.database().ref().child('query-data'); //ref to the root node with a child "query-data"
var usersRef = ref.child('users');
/*var userRef1 = usersRef.push({height : "172", name : "Luke Skywalker",order : 1});
var userRef2 = usersRef.push({height : "167", name : "C-3PO",order : 2}); 
var userRef3 = usersRef.push({height : "96", name : "R2-D2",order : 3}); 
var userRef4 = usersRef.push({height : "202", name : "Darth Vader",order : 4});  
var userRef5 = usersRef.push({height : "150", name : "Leia Organa",order : 5}); 
var userRef6 = usersRef.push({height : "178", name : "Owen Lars",order : 6}); 
var userRef7 = usersRef.push({height : "165", name : "Beru Whitesun Lars",order : 7}); 
var userRef8 = usersRef.push({height : "97", name : "R5-D4",order : 8}); 
var userRef9 = usersRef.push({height : "183", name : "Biggs Darklighter",order : 9}); 
var userRef10 = usersRef.push({height : "182", name : "Obi-Wan Kenobi",order : 10});  
*/  
console.log(usersRef.toString());

///////Queries: 
usersRef.orderByChild('order').endAt(3).on('child_added', function(snap){
    console.log(snap.val());
});


/*usersRef.orderByKey().endAt("-M8UA8vSE82sDitPwl77").limitToFirst(3).on('child_added', function(snap){
    console.log(snap.val());
});
*/

/*usersRef.orderByKey().equalTo("-M8UA8vSE82sDitPwl77").on('value', function(snap){
    console.log(snap.val());
});
*/

/*usersRef.orderByKey().startAt("-M8UA8vRruCvWrUoCMlM").limitToFirst(3).on('child_added', function(snap){
    console.log(snap.val());
});
*/

usersRef.orderByKey().limitToLast(2).on('child_added', function(snap){
    console.log(snap.val());
});
