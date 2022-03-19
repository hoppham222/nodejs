// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoite from './route/api';
require('dotenv').config();

// const path = require('path');
const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setuo view engine
configViewEngine(app);

//init web route
initWebRoute(app);

initAPIRoite(app);




app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})