
const mongoose = require('mongoose') //Connect to mongoose

const contactSchema = new mongoose.Schema({
    contactFirstname: {
        type: String,
        required: true,
    },

    contactLastname: {
        type: String,
        required: true,
    },

    contactEmail: {
        type: String,
        required: true,
    },
}) //Create schema

//Pass schema to a model in mongoose, so it can create in the database if it doesn't exit.

const Contact = mongoose.model("ContactData", contactSchema)

module.exports = Contact