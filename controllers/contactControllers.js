const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET all /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find();
 res.status(200).json(contacts)
});


//@desc Create contact
//@route POST all /api/contacts
//@access public

const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone}=req.body;
    if(!name||!email||!phone)
    {
        res.status(400)
        throw new Error("All fields are madatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
 res.status(201).json(contact);
});

//@desc Get a contact
//@route GET all /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
       throw new Error("Contact Not Found");
    }

 res.status(200).json(contact);
});

//@desc update contact
//@route PUT all /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req,res)=>{
      const contact = await Contact.findById(req.params.id);
     if(!contact)
    {
        res.status(404);
       throw new Error("Contact Not Found");
    }
const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
);

 res.status(200).json(updatedContact);
});

//@desc delete contact
//@route DELETE all /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req,res)=>{
      const contact = await Contact.findById(req.params.id);
     if(!contact)
    {
        res.status(404);
       throw new Error("Contact Not Found");
    }
     await Contact.findByIdAndDelete(req.params.id);
 res.status(200).json(contact);
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};