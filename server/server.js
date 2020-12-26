const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');

app.use(cors());

app.use(logger('dev'));

/* BodyParser */
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true}));
app.use(express.json());

/* Passport Middleware */
app.use(passport.initialize());
app.use(passport.session());
require('./app/config/passport')(passport);

// Configuring the database
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const url = dbConfig.url;
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Connected to MongoDB.");   
        /* test_data.initial_testData(); */
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
// Connecting to the database 
connectDB();

let port = process.env.PORT || 80;
// Create a Server
const server = app.listen(port, function () {
    
    let host = server.address().address
    let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})