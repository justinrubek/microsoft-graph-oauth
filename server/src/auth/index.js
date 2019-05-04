import express from 'express';

import authHelper from '../helpers/auth';

const router = express.Router();

router.use(function log(req, res, next) { 
  next();
});

// Get the URL to login to outlook services
router.get('/signin', async function(req, res, next) {
  // const accessToken = await authHelper.getAccessToken(req.cookies, res);
  // const userName = req.cookies.graph_user_name;

  res.redirect(authHelper.getAuthUrl());
});

router.get('/callback', async function(req, res, next) {
  const code = req.query.code;
  if (code) {
    let token;

    try {
      token = await authHelper.getTokenFromCode(code, res)
      res.redirect("/");
    } catch (error) {
      res.redirect("/authError");
    }
  } else {
    res.sendStatus(400);
  }
});

router.get("/signout", function(req, res, next) {
  authHelper.clearCookies(res);

  res.redirect("/");
});

export default router;
