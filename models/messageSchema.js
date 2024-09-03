import mongoose from "mongoose";
import validator from "validator";
 
const messageSchema = new mongoose.Schema({
      firstName: {
        type:String,
        required: true,
        minLength:[3,"First Name Must Contain At least 3 Characters"]
      },
      lastName: {
        type:String,
        required: true,
        minLength:[3,"First Name Must Contain At least 3 Characters"]
      },
      email: {
        type:String,
        required: true,
        validate:[validator.isEmail, "Please Provide A Valid Email!"]
      },
      phone: {
        type:String,
        required: true,
        minLength:[10,"Phone Number Must Contain Exact 10 digits"],
        maxLength:[10,"Phone Number Must Contain Exact 10 digits"],
      },
      message: {
        type:String,
        required: true,
        minLength:[10,"Message Must Contain At least 10 Characters"],
      }
});

export const Message =mongoose.model("Message",messageSchema);