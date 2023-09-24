const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());



const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/submit-order", (req, res) => {
  
  const {  userName , userEmail , address , phone , date , time , itemName , itemQuantity} = req.body;
  console.log(userEmail);
  
  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'vascularbundle43@gmail.com',
    pass: 'gxauudkzvdvhdzbg',
  },
});

const storeMailOptions = {
  from: userEmail,
  to: "vascularbundle43@gmail.com",
  subject: "New Cafe Order",
  html: `
    <center><h2 style="color: #c8a97e;">Great News! <br> <span style="color:#212529">You have received an order from ${userName}</span></h2></center>
    <hr style="border: 2px solid #c8a97e;">
    <center><h3>Order Details</h3></center>
    <p><strong>Email:</strong> ${userEmail}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Item Name:</strong> ${itemName}</p>
    <p><strong>Item Quantity:</strong> ${itemQuantity}</p>
  `,
};
const userMailOptions = {
  from: "wajih786hassan@gmail.com",
  to: userEmail,
  subject: "SweetSpot Desserts",
  html: `
    <h2>Welcome to SweetSpot Desserts,<br><br> <center><span style="color: #c8a97e;">${userName}!</span></center></h2>
    <p>Thank you for placing your order with us. Here are the details of your order:</p>
    <center><h3>Order Details</h3></center>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Item Name:</strong> ${itemName}</p>
    <p><strong>Item Quantity:</strong> ${itemQuantity}</p>
    
    <p>Your order has been received and will be processed shortly. Thank you for choosing SweetSpot Desserts!</p>
  `,
};

// Send the email to the store
transporter.sendMail(storeMailOptions, function(error, storeInfo) {
  if (error) {
    console.error(error);
    res.status(500).send("Error sending email to store");
  } else {
    console.log("Email sent to store: " + storeInfo.response);

    // Send the email to the user
    transporter.sendMail(userMailOptions, function(error, userInfo) {
      if (error) {
        console.error(error);
        res.status(500).send("Error sending email to user");
      } else {
        console.log("Email sent to user: " + userInfo.response);
        res.status(200).send("Order submitted successfully");
      }
    });
  }
});

});


app.get("/", (req,res) =>{
  res.send("Backend server for ordering items has started running successfully...");
});




const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  
