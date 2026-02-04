const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET all /api/contacts
//@access private

const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find({user_id:req.user.id});
 res.status(200).json(contacts)
});


//@desc Create contact
//@route POST all /api/contacts
//@access private

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
        user_id:req.user.id,
    })
 res.status(201).json(contact);
});

//@desc Get a contact
//@route GET all /api/contacts/:id
//@access private

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
//@access private

const updateContact = asyncHandler(async(req,res)=>{
      const contact = await Contact.findById(req.params.id);
     if(!contact)
    {
        res.status(404);
       throw new Error("Contact Not Found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("User have Don't have permission to update other user contacts")
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
//@access private

const deleteContact = asyncHandler(async(req,res)=>{
      const contact = await Contact.findById(req.params.id);
     if(!contact)
    {
        res.status(404);
       throw new Error("Contact Not Found");
    }
      if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("User have Don't have permission to delete other user contacts")
    } 
     await Contact.findByIdAndDelete(req.params.id);
 res.status(200).json(contact);
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};