import express from "express";
import {
  createAuth,
  getAuth,
  getOneAuth,
  
} from "../controller/authController";
import { upload } from "../Config/multer";

const router = express.Router();

router.route("/create").post( upload ,  createAuth);
// router.route("/sign-in").post(signinAuth);
router.route("/read").get(getAuth);
router.route("/:authID/read").get(getOneAuth);

export default router;
