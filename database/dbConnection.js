import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RECRUITMENT_PORTEL"
    }).then(() =>{
        console.log('connected to database!')
    }).catch((err) =>{
        console.log(`some error occured while connected to database: ${err}`)
    })
}