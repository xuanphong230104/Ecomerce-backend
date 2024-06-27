const express = require("express");
const dotenv = require('dotenv');
const {default : mongoose} =require("mongoose")
const routes= require('./routes')
const bodyParser = require('body-parser')
dotenv.config();

const app = express();
const port = process.env.PORT || 3002; // Change to a different port, like 3002

app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) => {
    res.send('Hello');
});


mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log("Server is running in port:", port);
});
