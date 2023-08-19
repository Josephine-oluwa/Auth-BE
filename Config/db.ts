import mongoose from "mongoose"
import env from "dotenv"
env.config()

const url = process.env.DB!
export const db = ()=> {
    mongoose.connect(url)
    .then(()=> {
        console.log("connected")
    })
    .catch((error: Error)=> {
        console.log(error)
    })
}