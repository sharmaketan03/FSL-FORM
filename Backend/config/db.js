import mongoose from "mongoose"


async function connectdb(){
    try{
      await  mongoose.connect(process.env.Mongoose_connection)
    }catch(err){
          console.log(err)
    }
}
export default connectdb