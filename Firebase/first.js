
//Save and Query Firebase Data
//Saving it by using update,push and transaction functions
// and query by the use of logs as below
var firebase = require('firebase').initializeApp({  //Initializing Firebase
    serviceAccount : "./fireb-1d147-23f9534f4c62.json", //service account key which is downloaded and added to the project
    databaseURL : "https://fireb-1d147.firebaseio.com/" //database URL
});
var message = {text : "hey Guys" , timestamp: new Date().toString()}; // Just a message
var ref = firebase.database().ref().child('node-client'); //ref to the root node with a child "node-client"
var logsRef = ref.child('logs');
var messagesRef = ref.child('messages'); // these two lines are to store the message in both logs and messages.
var messageRef =  messagesRef.push(message); //Pushed to as the child to the root note with an auto generated key.
//Using update we can update the tree
var payload = {
    'logKey' : messageRef.key,
    'some/other/path' : 'hey guys again'
}; 

ref.update(payload);

logsRef.child(messageRef.key).set(message); // sets the message with the key of messageRef as the child of this logs
//Using Transaction to get the count of the child added or changed:
logsRef.child('count').transaction(function(i){
    return i+1;
});
logsRef.orderByKey().limitToLast(1).on('child_added', function(snap) {  
    console.log('added',snap.val()); 
});

logsRef.on('child_removed', function(snap) { //shows the log when child removed
    console.log('removed',snap.val()); 
});

logsRef.on('child_changed',function(snap) { // shows the log when the child is changed
    console.log('changed',snap.val());
});

logsRef.on('value',function(snap) { // show sthe value at ny event trigger
    console.log('value',snap.val());
});

