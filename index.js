const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const app = express();

const ContactModel = require("./models/Contact");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const uri = process.env.REACT_APP_ATLAS_URI;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const contact = new ContactModel({
    contactFirstname: firstName,
    contactLastname: lastName,
    contactEmail: email,
  });

  res.send("Success");
  try {
    await contact.save();
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  ContactModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
