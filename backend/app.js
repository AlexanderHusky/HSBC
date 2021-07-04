const express = require('express');

const router = require('./src/controller/router');
const service = require('./src/service/service');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(router)
app.options('*', cors());


app.listen(8080, () => {
    console.log('App is running...')
})
