const express = require('express');
const fs = require('fs');
const router = require('./controller/router');
const service = require('./service/service');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(router)
app.use(cors());


app.listen(8080, () => {
    console.log('App is running...')
})
