import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import bluebird from 'bluebird';

import authHelper from './helpers/auth';

import config from './config';

// ROUTES
import auth from './auth';

const public_folder = path.resolve(__dirname, '..', '..', 'public');
const app = express();

app.use(logger(config.logging_format));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/auth', auth);

app.get('/', async (req, res) => {
  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;

  if (accessToken && userName) {
    res.send({accessToken, userName});
  } else {
    res.send('Not logged in.');
  }
});

app.use(express.static(public_folder));

/*
app.get("*", (req, res) => {
  res.sendFile(path.join(public_folder, "index.html"));
});
*/

export default app;
