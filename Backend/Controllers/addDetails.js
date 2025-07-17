import mongdatamodel from "../models/detailModels.js";

export async function addDetails(req, res) {
  console.log("first");
  try {
    const ToAddData = new mongdatamodel(req.body);
    console.log(ToAddData.image)        
    
    await ToAddData.save();
    res.status(200).send("Data Add Successfully");
  } catch (err) {
    console.log("error found in outer backend", err);
    res.status(500).send("Data do not add");
  }
}

export async function getDetails(req,res) {
     try{
           let allData=await mongdatamodel.find({})
           res.status(200).send(allData)
     }catch(err){
       console.log("error found:",err)
     }
}




