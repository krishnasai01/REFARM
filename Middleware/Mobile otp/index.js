const express = require("express");
const app = express();

const port = 3000;

//refarm app

  const config ={
    serviceID: "VAbe31c604fec5a2590c7e4e17cfc62c12",
    accountSID: "ACddc56367a1d76e6a7021c01927b8846d",
    authToken: "1159db5fa074b57f0cd48706e620a90e"
  }



const client = require("twilio")(config.accountSID, config.authToken);

app.post('/login', (req, res) => {

        client
          .verify
          .services(config.serviceID)
          .verifications
          .create({
              to: `+${req.query.phonenumber}`,
              channel: req.query.channel
          })
          .then((data) => {
              res.status(200).send(data);
          })
});


app.post('/verify', (req, res) => {
   
    client
        .verify
        .services(config.serviceID)
        .verificationChecks
        .create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code
        })
        .then((data) => {
            res.status(200).send(data);
        })
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})