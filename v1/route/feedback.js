import express from "express";
import { addFeedback, getAllFeedback } from "../../utils/dbUtils.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAllFeedback();
    return res.status(200).json({ feedbacks: data });
  } catch (error) {
      return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
    }
});

router.post("/", async (req, res) => {
  try {
    const feedback = req.body.feedback;
    const { code, message, success } = await addFeedback(feedback);

    if (success) {
      return res.status(code).json({ success, message });
    }
    return res.status(code).json({ success, message });
  } catch (error) {
      console.log(error)
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

export default router;
