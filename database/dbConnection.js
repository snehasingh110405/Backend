import mongoose from "mongoose";

export const dbConnection= ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Project 0"
    })
    .then(()=>{
        console.log("Connected to databse! ")
    })
    .catch(err=>{
        console.log(`Some error occured while connecting with databse; ${err}`);
    });
}