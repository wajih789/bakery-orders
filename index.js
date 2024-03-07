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
    user: 'steeleluna899@gmail.com',
    pass: 'jiafuqyzbmehylxs',
  },
});

const storeMailOptions = {
  from: userEmail,
  to: "steeleluna899@gmail.com",
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
  from: "steeleluna899@gmail.com",
  to: userEmail,
  subject: "SweetSpot Desserts",
  html: `
    <center><h2>Welcome to SweetSpot Desserts,<br><br> <center><span style="color: #c8a97e;">${userName}!</span></center></h2></center>
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











// code for construction sending emails form


app.post("/send-data", (req, res) => {
  
  const {  name , email , subject , message} = req.body;
  console.log(name);
  
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
  from: email,
  to: "vascularbundle43@gmail.com",
  subject: `New Quote from ${name}`,
  html: `
    <center><h2 style="color: #c8a97e;">Great News! <br> <span style="color:#212529">You have received a quote from ${name}</span></h2></center>
    <hr style="border: 2px solid #c8a97e;">
    <center><h3>Message</h3></center>
    <p> ${message}</p>
    <p style="margin-top:10px;">Contact: ${email}</p>
    
    
    `,
};
const userMailOptions = {
  from: "vascularbundle43@gmail.com",
  to: email,
  subject: subject,
  html: `
    <center><h2>Welcome to All County Construction,<br><br> <center><span style="color: #c8a97e;">${name}!</span></center></h2></center>
    <p>Thank you for reaching put to us. Here is your message:</p>
    <center><h3>Message</h3></center>
    <p> ${message}</p>
    
    <p>Your email has been received and will be processed shortly. Thank you for choosing All County Construction!</p>
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
















// code for model website sending emails form


app.post("/send-data-modal", (req, res) => {
  
  const {  name , email , message} = req.body;
  console.log(name);
  
  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'phoebechok1411@gmail.com',
    pass: 'jfxluqtdvsekaxar',
  },
});

const storeMailOptions = {
  from: email,
  to: "phoebechok1411@gmail.com",
  subject: `Message from ${name}`,
  html: `
    <center><h2 style="color: #c8a97e;">Great News! <br> <span style="color:#212529">You have received a message from ${name}</span></h2></center>
    <hr style="border: 2px solid #c8a97e;">
    <center><h3>Message</h3></center>
    <p> ${message}</p>
    <p style="margin-top:10px;">Contact: ${email}</p>
    
    
    `,
};
const userMailOptions = {
  from: "phoebechok1411@gmail.com",
  to: email,
  subject: "Phoebe Chok",
  html: `
    <center><h2>Thanks <span style="color: #c8a97e;">${name}</span> for reaching out to me.<br><br> </h2></center>
    <p>Here is your message:</p>
    <p> ${message}</p>
    
    <p>Your email has been received. Thank you for choosing me! <br> Phoebe Chock, <br> Model</p>
  
    `
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





// code for soup website sending emails form


app.post("/send-data-juan", (req, res) => {
  
  const {  name , email , message, subject} = req.body;
  console.log(name);
  
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
  from: email,
  to: "vascularbundle43@gmail.com",
  subject: `Message from ${name}:${subject}`,
  html: `
  <center><img src="https://i.ibb.co/st0MBgj/ss2.png" alt="two" border="0" style=" margin-bottom: 20px; width:70px;
  border-radius: 50%;
  padding:5px;
  border: 2px solid #149ddd;"></center>
   
  <center><h2 style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Great News!</h2></center>
  <center><h2 style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 18px; margin-bottom: 10px;"><span style="color: #149ddd;">You have received a message from ${name}</span></h2></center>
  <hr style="border: 0.5px solid black;">
  <center><h3 style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 16px; margin-bottom: 10px;">Message</h3></center>
  <p style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">${message}</p>
  <p style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-top: 10px;">Contact: ${email}</p>

    
    `,
};
const userMailOptions = {
  from: "vascularbundle43@gmail.com",
  to: email,
  subject: "Juan David",
  html: `
  <center><img src="https://i.ibb.co/st0MBgj/ss2.png" alt="two" border="0" style=" margin-bottom: 20px; width:70px;
  border-radius: 50%;
  padding:5px;
  border: 2px solid #149ddd;"></center>
   
  <center><h2 style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Thank You, <span style="color: #149ddd;">${name}</span>!</h2></center>
  <p style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">Your query:</p>
  <p style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">${message}</p>
  <p style="color: #3A3A3A; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">Your email has been received. Thank you for contacting Juan David!</p>

    `
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
  res.send("Backend server for ordering items and sending messages has started running successfully...");
});




const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  
