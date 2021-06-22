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
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

dotenv.config();

const app = express();
const environment = process.env.NODE_ENV || 'development';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LX Test Exam - API Documentation",
      version: "0.1.0",
      description:
        "Create API's based on the requirement",
      contact: {
        name: "John Michael Ong",
        email: "jhonlance.37@gmail.com",
      },
    },
    servers: [
      {
        url: process.env.SWAGGER_API_HOST || "https://john-michael-ong-test-rest-api.herokuapp.com/",
      },
    ],
  },
  apis: ["./routes/index.js"]
};

const specs = swaggerJsdoc(options);


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

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
