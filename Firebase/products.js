var firebase = require('firebase').initializeApp({
    serviceAccount : "./refarm-firebase.json",
    databaseURL : "https://refarm.firebaseio.com/"
});
var ref = firebase.database().ref().child('Products');
var  Usersref = ref.child('Users');
var ref0 = Usersref.push({
    Item_Type : "" ,
    Product_ID : "" ,
    Product_Name : "",
    Product_Type : "",
    Product_Code_or_SKU : "",
    Bin_Picking_Number :  "",
    Brand_Name : "",
    Option_Set : "",
    Option_Set_Align : "",
    Product_Description : "",
    Price : "",
    Cost_Price : "",
    Retail_Price : "",
    Sale_Price : "",
    Fixed_Shipping_Cost : "",
    Free_Shipping : "",
    Product_Warranty : "",
    Product_Weight : "",
    Product_Width : "",
    Product_Height : "",
    Product_Depth : "",
    Allow_Purchases : "",
    Product_Visible : "",
    Product_Availability : "",
    Track_Inventory : "",
    Current_Stock_Level : "",
    Low_Stock_Level : "",
    Category : "",
    Product_Image_ID_1 : "",
    Product_Image_File_1 : "",
    Product_Image_Description_1 : "",
    Product_Image_Is_Thumbnail_1 : "",
    Product_Image_Sort_1 : "",
    Search_Keywords : "",
    Page_Title : "",
    Meta_Keywords : "",
    Meta_Description : "",
    Product_Condition : "",
    Show_Product_Condition : "",
    Sort_Order : "",
    Product_Tax_Class : "",
    Product_UPC_or_EAN : "",
    Stop_Processing_Rules : "",
    Product_URL : "",
    Redirect_Old_URL  : "",
    GPS_Global_Trade_Item_Number : "",
    GPS_Manufacturer_Part_Number : "",
    GPS_Gender : "",
    GPS_Age_Group : "",
    GPS_Color : "",
    GPS_Size : "",
    GPS_Material : "",
    GPS_Pattern : "",
    GPS_Item_Group_ID : "",
    GPS_Category : "",
    GPS_Enabled : "",
    Tax_Provider_Tax_Code : "",
    Product_Custom_Fields : ""
}).then(function (res){
    console.log("Pushed All");
});