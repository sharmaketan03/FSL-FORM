import mongdatamodel from "../models/detailModels.js";
import {v2 as cloudinary} from "cloudinary"
import multer from "multer"
const storage=multer.memoryStorage();
const upload=multer({storage})
import "dotenv/config"

cloudinary.config({ 
        cloud_name: process.env.CLOUDNAME, 
        api_key:process.env.APIKEY, 
        api_secret: process.env.APISECRET // Click 'View API Keys' above to copy your API secret
    });

    function uploadToCloudinary(buffer,folder){
      console.log("ketan")
      return new Promise((resolve,reject)=>{
        const stream=cloudinary.uploader.upload_stream(
          {folder},
          (err,result)=>{
            if (result) resolve(result);
            else reject(err)
          }
        )
        stream.end(buffer)
      })
    }

export async function addDetails(req,res){
    console.log("first")
    upload.fields([
      {name:"imageFront" ,maxCount:1},
      {name:"imageBack",maxCount:1}
    ])(req,res, async(err)=>{
       if(err){
         return res.status(400).json({message:"File upload error",error:err.message})
       }
       const imageFrontFile=req.files?.imageFront?.[0];
       const imageBackFile=req.files?.imageBack?.[0]
       if(!imageFrontFile||!imageBackFile){
         return res.status(400).json({message:"Both Adhar files are required"})
       }

       const filesize=5*1024*1024

       if(imageFrontFile.size>filesize|| imageBackFile.size>filesize){
           return res.status(400).json({message:"Adhar image must be under 5MB"})
       }
       const {email,...rest}=req.body;


       try{
        const userExists=await mongdatamodel.findOne({email});

        if(userExists){
           return  res.status(409).json({message:"Email already register"})
        }

        console.log("tanmay")
        
        const [imageFrontImg,imageBackImg]=await Promise.all([
           uploadToCloudinary(imageFrontFile.buffer,"aadhar"),
           uploadToCloudinary(imageBackFile.buffer,"aadhar")
        ])

         console.log(imageFrontImg)
         console.log(imageBackImg)


         const userData={
          email,
          ...rest,
          imageFront:imageFrontImg.secure_url,
          imageBack:imageBackImg.secure_url
         }
        const newUser=new mongdatamodel(userData);
        const saveduser=await newUser.save()


        res.status(201).json({message:"User Register",user:saveduser})


       }catch(error){
            console.log("Register Error",err)
            res.status(500).json({message:"seraver error",error:error.message})
       }
    })
}













// export async function addDetails(req, res) {
//   console.log("first");
//   try {
//     const ToAddData = new mongdatamodel(req.body);
//     console.log(ToAddData.image)        
    
//     await ToAddData.save();
//     res.status(200).send("Data Add Successfully");
//   } catch (err) {
//     // console.log("error found in outer backend", err);
//     console.log(req.body)

//     res.status(500).send("Data do not add");
//   }
// }

// export async function getDetails(req,res) {
//      try{
//            let allData=await mongdatamodel.find({})
//            res.status(200).send(allData)
//      }catch(err){
//        console.log("error found:",err)
//      }
// }




// import mongdatamodel from "../models/detailModels.js";
// import path from 'path';

// export async function addDetails(req, res) {
//   try {
//     // Extract file paths from req.files
//     const imageFront = req.files?.imageFront?.[0]?.filename;
//     const imageBack = req.files?.imageBack?.[0]?.filename;

//     console.log("req.files",req.files)
//     console.log("imageFront:",imageFront)

//     if (!imageFront || !imageBack) {
//       return res.status(400).send("Both Aadhaar images are required");
//     }

//     // Build the full body with file paths
//     const dataToSave = {
//       ...req.body,
//       imageFront: `/upload/${imageFront}`,
//       imageBack: `/upload/${imageBack}`,
//     };

//     const newEntry = new mongdatamodel(dataToSave);
//     await newEntry.save();

//     res.status(200).send("Data Added Successfully");
//   } catch (err) {
//     console.log("Backend error:", err);
//     res.status(500).send("Failed to add data");
//   }
// }