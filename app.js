import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';
import httpErrors from 'http-errors';
import lessMiddleware from 'less-middleware';
import logger from 'morgan';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import indexRouter from './routes/index';

dotenv.config();

const app = express();
const environment = process.env.NODE_ENV || 'development';

// Swagger Init
const expressSwagger = require('express-swagger-generator')(app);

expressSwagger({
  swaggerDefinition: {
    info: {
      title: process.env.SWAGGER_TITLE || 'LX Test Exam - API Documentation', 
      description: process.env.SWAGGER_DESCRIPTION || '',
      version: process.env.SWAGGER_VERSION || 'Create API\'s based on the requirement',
    },
    host: process.env.SWAGGER_API_HOST || 'john-michael-ong-test-rest-api.herokuapp.com',
    consumes: [
      'application/json'
    ],
    produces: [
      'application/json'
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'Authentication Token for NodeJS API Boilerplate',
      }
    }
  },
  basedir: __dirname, // app absolute path
  files: ['./controllers/*.js'] // Path to the API handle folder
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

module.exports = app;
