const Customer = require("../models/customer.model");

exports.create = async (req,res)=>{

  const customer = await Customer.create(req.body);

  res.json(customer);
};

exports.getAll = async (req,res)=>{

  const customers = await Customer.find();

  res.json(customers);
};

exports.update = async (req,res)=>{

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(customer);
};

exports.delete = async (req,res)=>{

  await Customer.findByIdAndDelete(req.params.id);

  res.json({message:"Deleted"});
};