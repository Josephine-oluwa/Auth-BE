import {Request, Response} from "express"
import authModel from "../Model/AuthModel"
import { HTTP } from "../Error/mainError";
import bcrypt from "bcrypt"
import cloudinary from "../Config/cloudinary";

export const createAuth = async(req: any, res: Response) => {
try {
    const {email, password, MyFamilyName, MyContactAddress } = req.body;

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const {secure_url , public_id} = await cloudinary.uploader.upload(req!.file!.path!)

    const auth = await authModel.create({
        email, password : hash, MyFamilyName, MyContactAddress , myImage : secure_url , myImageID : public_id
    });
    return res.status(HTTP.OK).json({
        message: "created",
        data: auth
    })
} catch (error) {
    res.status( HTTP.BAD_REQUEST).json({
        message:"there is error",
        error
    })
}
}

// export const SIgnInUser = async(req: Request, res: Response) => {
// try {
//     const {email, password} = req.body;

//     const auth = await authModel.findOne({email, password})

//     res.status(HTTP.OK).json({
//         message: "created",
//         data: auth
//     })
// } catch (error) {
//     res.status( HTTP.BAD_REQUEST).json({
//         message:"there is error"
//     })
// }
// }

export const getAuth = async (req: Request, res: Response) => {
    try {
        const auth = await authModel.find()
        res.status(HTTP.OK).json({
            message: "created",
            data: auth
        })
    } catch (error) {

    }
}

export const getOneAuth = async (req: Request, res: Response) => {
    try {
      const { authID } = req.params;
  
      const auth = await authModel.findById(authID);
  
      res.status(HTTP.OK).json({
        message: "found one",
        data: auth,
      });
    } catch (error) {
      res.status(HTTP.BAD_REQUEST).json({
        message: "Error",
      });
    }
  };
