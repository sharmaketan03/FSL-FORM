
import mongoose from "mongoose"



  let Detailschema= new mongoose.Schema({
       
     Name:{
        type:String,
        required:true,
        min:4,
        max:30,
     }
     ,
     email:{
          type:String,
          required:true
     },
     phone:{
         type:Number,
         required:true
     },
     date:{
        type:Date,
        required:true
     },
     imageFront:{
          type:String,
          required:true
     },
      imageBack:{
          type:String,
          required:true
     },
    gender:{
        type:String,enum:["male","female","other"],
        required:true
    },
    guardianDetails:{
        type:String,
        required:true
    },
     guardianPhone:{
         type:Number,
        required:true
     },
     localaddress:{
         type:String,
        required:true
     },
     permanentaddress:{
         type:String,
        required:true
     },
      qualification:{
         type:String,
        required:false
      },
       year: {
         type:Number,
        required:false
       },
         university: {
            type:String,
        required:false
         },
         designation: { 
             type:String,
        required:false
         },
         Company:{
            type:String,
        required:false
         },
         course: {
            type:String,
        required:true
         }




 },{timestamps:true})
 
let mongdatamodel= mongoose.model('detail',Detailschema)//mediater in server and database

export default mongdatamodel;
