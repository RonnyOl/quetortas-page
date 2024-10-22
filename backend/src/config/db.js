import { mongoose } from 'mongoose'

export const connectToDB = async () =>{
    await mongoose.connect(process.env.URI).then((result) => {
        console.log("Connected")
    })
}
