const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth.routes");
const customerRoutes = require("./routes/customer.routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crm").then(()=>{
    console.log("Connected");
    
})

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

module.exports = app;