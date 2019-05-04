import express from "express";

const router = express.Router();

router.use(function timelog(req, res, next) {
  console.log(`API access at ${Date.now()} from ${req.ip}`);
  next();
});


export default router;
