const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:[true,"Please add the contact name"],
    },
    email:{
        type: String,
        required:[true,"Please add the contact email"],
        unique:[true,"Email address Already Taken"]
    },
    password:{
        type: String,
        required:[true,"Please add the password"],  
    }

},{
    timestampes: true,
});

module.exports=mongoose.model("User",userSchema)
