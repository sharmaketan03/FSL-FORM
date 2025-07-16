
import mongoose from "mongoose"



  let Detailschema= new mongoose.Schema({
       
     Name:{
        type:String,
        required:true,
     }
     ,
     email:{
          type:String,
          required:true
     },
     phone:{
         type:String,
         required:true
     },
     date:{
        type:String,
        required:true
     },
    gender:{
        type:String,
        required:true
    },
    guardianDetails:{
        type:String,
        required:true
    },
     guardianPhone:{
         type:String,
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
         type:String,
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
