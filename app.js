var createError = require('http-errors');
import express from "express";
var path = require('path');
var logger = require('morgan');

import models from './models';
import routers from './routes';

models.sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("성공")
  })
  .catch(err => {
    console.log("실패");
    console.log(err);
  });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default router;