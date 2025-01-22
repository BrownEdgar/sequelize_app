import { Router } from "express";
const router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("home");
});

export default router;
