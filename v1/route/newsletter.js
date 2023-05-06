import express from "express";
import { emailValidator } from "../../utils/validators.js";
import newsletterLimiter from "../../ratelimiter/newsletterLimiter.js";
import suscribeToNewsletter from "../../services/suscribeToNewsletter.js";
import funcHandler from "../../utils/funcHandler.js";
import { addEmail } from "../../utils/dbUtils.js";

const router = express.Router();

router.get("/user/:email",newsletterLimiter, emailValidator , async(req, res) => {
    try {
        const email = req.params.email;
        const response = await addEmail(email)
        const {success,message,code} = response
        if(success) {
            const[data,error] = await funcHandler(suscribeToNewsletter,email)
            console.log("🚀 ~ file: newsletter.js:18 ~ router.get ~ error:", error)
        }
        res.status(code).json({success,message})

    } catch (error) {
        return res.status(500).json({success:false,error:"Internal server error"})
    }
});

export default router;
