const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({

  name: String,

  email: String,

  phone: String,

  company: String,

  status: {
    type: String,
    default: "lead"
  }

});

module.exports = mongoose.model("Customer", CustomerSchema);