import mongoose from "mongoose"

export interface iAuth {
    
    email?: string;
    password?: string;
    myImage?: string;
    MyFamilyName?: string;
    MyContactAddress?: string;
    myImageID? : string
}

interface iAuthData extends iAuth, mongoose.Document {}

const authModel  = new mongoose.Schema<iAuth>(
    {
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
        },
        myImage: {
            type: String,
        },
        myImageID: {
            type: String,
        },
        MyFamilyName: {
            type: String,
        },
        MyContactAddress: {
            type: String
        }
    }
)

export default mongoose.model<iAuthData>("auths", authModel)