// import mongdatamodel from "../models/detailModels.js";

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




import mongdatamodel from "../models/detailModels.js";
import path from 'path';

export async function addDetails(req, res) {
  try {
    // Extract file paths from req.files
    const imageFront = req.files?.imageFront?.[0]?.filename;
    const imageBack = req.files?.imageBack?.[0]?.filename;

    console.log("req.files",req.files)

    if (!imageFront || !imageBack) {
      return res.status(400).send("Both Aadhaar images are required");
    }

    // Build the full body with file paths
    const dataToSave = {
      ...req.body,
      imageFront: `/upload/${imageFront}`,
      imageBack: `/upload/${imageBack}`,
    };

    const newEntry = new mongdatamodel(dataToSave);
    await newEntry.save();

    res.status(200).send("Data Added Successfully");
  } catch (err) {
    console.log("Backend error:", err);
    res.status(500).send("Failed to add data");
  }
}
