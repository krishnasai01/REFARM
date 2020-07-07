const express = require('express');
const bodyParser = require('body-parser');

const firebase = require('firebase').initializeApp({
  serviceAccount : "./serviceAccountKey.json",
  databaseURL : "https://refarm.firebaseio.com/"
});

var orderref = firebase.database().ref().child('Orders');

exports.order_status=(req,res) => {
const order_stat = {
        text:`${req.body.order_stat}`
    }
switch(req.body.order_stat){
    case "pending" : 
    const num_of_items = {
        text:`${req.body.numofitems}`       
}
    const total_price = {
        text:` ${req.body.totalprice}`
}
    const account_id = {
        text:`${req.body.accountid}`
}   
    var order_payment_status = {
        text:`${req.body.orderpaymentstatus}`
}
var ref0 = orderref.push({
    Order_ID : "",
    Number_of_items: req.body.numofitems,
    Total_Price : req.body.totalprice,
    Order_Status : req.body.order_stat,
    Account_ID : req.body.accountid,
    Order_Payment_Status : req.body.orderpaymentstatus
}).getKey();
var ref1 = orderref.child(ref0).update({
    Order_ID : ref0
});
    req.body.orderid = ref0;
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Number of items:' + req.body.numofitems +'\n'+
            'Total Price: '  + req.body.totalprice +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Account ID:' + req.body.accountid +'\n'+
            'Order Payment Status:' + req.body.orderpaymentstatus
            );
    break;
    
    case "fulfilled" : var order_id = {
        text:`${req.body.orderid}`
    }  
    var order_payment_status = {
        text:`${req.body.orderpaymentstatus}`
}
    const delivery_address = {
        text:`${req.body.deliveryaddress}`
}
var ref0 = orderref.child(req.body.orderid).update({
    Order_Status : req.body.order_stat,
    Receipt_ID : "",
    Order_Payment_Status : req.body.orderpaymentstatus,
    Delivery_Address : req.body.deliveryaddress
});
var ref1 = orderref.child(req.body.orderid).push({}).getKey();
var ref2 = orderref.child(req.body.orderid).update({
    Receipt_ID : ref1
});
    req.body.receiptid = ref1;
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Receipt ID:' + req.body.receiptid +'\n'+
            'Delivery Address:' + req.body.deliveryaddress +'\n'+
            'Order Payment Status:' + req.body.orderpaymentstatus
            );
    break;

    case "dispatched" : var order_id = {
        text:`${req.body.orderid}`
    }  
    const delivery_client = {
        text:`${req.body.deliveryclient}`
} 
    const tracking_id = {
        text:`${req.body.trackingid}`
}   
    var order_payment_status = {
        text:`${req.body.orderpaymentstatus}`
}
var ref0 = orderref.child(req.body.orderid).update({
    Order_Status : req.body.order_stat,
    Delivery_Client : req.body.deliveryclient,
    Tracking_ID : req.body.trackingid,
    Order_Payment_Status : req.body.orderpaymentstatus
});
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Delivery Client:' + req.body.deliveryclient +'\n'+
            'Tracking ID:' + req.body.trackingid +'\n'+
            'Order Payment Status:' + req.body.orderpaymentstatus
            );
    break;

    case "readyforpickup" : var order_id = {
        text:`${req.body.orderid}`
    }
    var order_position = {
        text:`${req.body.orderposition}`
}   
    var order_payment_status = {
        text:`${req.body.orderpaymentstatus}`
}
var ref0 = orderref.child(req.body.orderid).update({
    Order_Status : req.body.order_stat,
    Order_Position : req.body.orderposition,
    Order_Payment_Status : req.body.orderpaymentstatus
});
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Order Position:' + req.body.orderposition +'\n'+
            'Order Payment Status:' + req.body.orderpaymentstatus
            );

    break;

    case "delivered" : var order_id = {
        text:`${req.body.orderid}`
    }    
  const order_delivery_date_and_time = {
        text:`${req.body.orderdeliverydandt}`
} 
  var order_payment_status = {
        text:`${req.body.orderpaymentstatus}`
} 
var ref0 = orderref.child(req.body.orderid).update({
    Order_Status : req.body.order_stat,
    Order_Position : "Delivered",
    Order_Delivery_Date_And_Time : req.body.orderdeliverydandt,
    Order_Payment_Status : req.body.orderpaymentstatus
});
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Order Payment Status:' + req.body.orderpaymentstatus +'\n'+
            'Order Delivery Date and Time' + req.body.orderdeliverydandt
            );
    break;

    case "completed" : var order_id = {
        text:`${req.body.orderid}`
    } 
  const order_payment_id = {
        text:`${req.body.orderpaymentid}`
}
var ref0 = orderref.child(req.body.orderid).update({
    Order_Status : req.body.order_stat,
    Order_Payment_ID : req.body.orderpaymentid,
    Order_Payment_Status : "Done"
}); 
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Order Payment ID:' + req.body.orderpaymentid
            );
    break;

    case "cancelledandrefunded" : var order_id = {
        text:`${req.body.orderid}`
    } 
    var order_position = {
        text:`${req.body.orderposition}`
}   
    const order_cancellation_reason = {
        text:`${req.body.ordercanceldetails}`
}  
    const order_refund_status = {
        text:`${req.body.orderrefundstatus}`
} 
var ref0 = orderref.child(req.body.orderid).update({
    Order_Status : req.body.order_stat,
    Order_Position : req.body.orderposition,
    Order_Cancellation_Reason : req.body.ordercanceldetails,
    Order_Refund_Status : req.body.orderrefundstatus
}); 
    res.end('Order ID:' + req.body.orderid +'\n'+
            'Order Status:'  + req.body.order_stat +'\n'+
            'Order Position:' + req.body.orderposition +'\n'+
            'Order Cancellation Details' + req.body.ordercanceldetails +'\n'+
            'Order refund Status:' + req.body.orderrefundstatus
            );

    break;
    case "orderstatus" :
/*    var order_id = {
        text:`${req.body.orderid}`
    }*/
    orderref.orderByKey().equalTo("-MBE413NM6j22o0Sr0oC").on('child_added' , (snap) =>{
    res.end(snap.val());
});
    break;
    default : 
    res.end('Error: Entered a Wrong Order Status........');
    break;
}

};