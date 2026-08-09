//schema

const mongoose = require("mongoose")
const validator = require("validator")
const bcyrpt = require("bcyrptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
// create Schema

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"please enter your name"],
        maxlength:[30,"Name cannot exceed 30 characters"]
    },
    email:{
        type:String,
        required:[true,"please enter your email id"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"Enter valid email id"]
    },
    password:{
        type:String,
        required:[true,"Enter password"],
        minlength:8,
        select:false
    },
    passwordConfirm:{
        type:String,
        required:[true,"Confirm password"],
        validate:{
            validator: function(el){
                return el === this.password
            },
            message: "Passwords are not same"
        }
    },
    phoneNumber:{
        type:String,
        required:true,
        match:[/^[0-9]{10}$/, "Enter valid phone number"]
    },
    role:{
        type:String,
        enum:["user","Admin"],
        default:"user"
    },
    avatar:{
        public_id: String,
        url: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
},
{timestamps:true}
);
