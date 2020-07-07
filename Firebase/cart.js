//const express = require('express');
//const bodyParser = require('body-parser');

const firebase = require('firebase').initializeApp({
    serviceAccount : "./serviceAccountKey.json",
    databaseURL : "https://refarm.firebaseio.com/"
  });
  
  var accountref = firebase.database().ref().child('Accounts');
  var userref = accountref.child('Users');
  var productsref = firebase.database().ref().child('Products');
  
  var ref0 = userref.push({
      Username : "ppp123",
      Emailid  : "pqpq@gmail.com",
      MobileNumber: "+91900453726"
  
  });
  var cartref = ref0.child('Cart');
  /*var ref1 = cartref.push({
    Product_Id:"12%34",
    Product_name:"Rice",
    Quantity:"10Kg",
    TotalPrice:"100/-"
  })
  };*/
  
  var num_of_items = 0;
  var total_price = 0;   
  //var ref = firebase.database().ref().child('Orders');
  productsref.child('Dals').orderByKey().equalTo("-MBU7pPyvz1UklNlBDkh").on('child_added' , (snap) =>{
      cartref.push({
          Product_name : snap.val().Product_Name,
          Total_Price: snap.val().Price
          //console.log(snap.val().Product_Name, snap.val().Price);
  });
    total_price += snap.val().Price;
  });
num_of_items += 1;
  cartref.update({
      Num_of_items : num_of_items,
      TotalPrice : total_price
  });

  /*if(firsttime){
      var num_of_items,TotalPrice = 0;
      QueryFromProducts(
          Push_to_cart();
          Totalprice +=
          num_of_items +=
      )
      cartref.update(
          Totalprice
          num_of_items
      )
  }else {
      if(productexisting){
          Queryfromcart(
          num_of_items,total_price
      )
          Updatecart_item();
          Totalprice +=
      )
      cartref.update(
          Totalprice
      )
      }else{
      Queryfromcart(
          num_of_items,total_price
      )
      QueryFromProducts(
          Push_to_cart();
          Totalprice +=
          num_of_items +=
      )
      cartref.update(
          Totalprice
          num_of_items
      )
  }
}
*/