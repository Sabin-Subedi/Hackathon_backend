import express from "express";
import { registerUser,loginUser } from "../controllers/authControllers.js";
// import { protect } from "../middleware/authMiddleware.js";
import { registerSchema, validate } from "../validation/authValidation.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register", validate.query(registerSchema)).post(registerUser);
// router.post('/user',getUserData)
// router.delete('/user/:id',protect,isAdmin,deleteUser)
// router.get('/users',protect,isAdmin,getAllUsers)
// router.post("/verify", protect, verifyEmail);
// router.get("/resend", protect, resendCode);

export default router;
