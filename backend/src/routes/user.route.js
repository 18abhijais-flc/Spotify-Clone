import { Router } from "express";  

const router = Router();

router.get("/", (req, res) => {
    req.auth.UserId;
    res.send("User route with GET method");
})

export default router