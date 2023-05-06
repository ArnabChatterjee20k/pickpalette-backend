import { rateLimit } from "express-rate-limit";
import defaultSettings from "./defaultSettings.js";

const newsletterLimiter = rateLimit({
  ...defaultSettings,
  windowMs: 60*60*1000,
  max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
  handler: function (req, res /*next*/) {
    return res.status(429).json({ success: false, error: "Too many requests" });
  },
});

export default newsletterLimiter;