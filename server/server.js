

import express from "express";
import bodyParser from 'body-parser'
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {} from 'dotenv/config'
import fs from "fs/promises";





const app = express()

//db


mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('database connection established')
    })
    .catch((error) => console.log(error))

//middleware
app.use(morgan('tiny'))
app.use(cookieParser())

app.use(express.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: "200mb", extended: true}));


//cors


const allowedOrigins = ['http://localhost:3000', process.env.DOMAIN];

app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET');
    }

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});


// port
const port = process.env.PORT || 8700;


// route middleware
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
(async () => {
    try {
        const files = await fs.readdir('./routes/');
        for (const file of files) {

            const route = await import(`./routes/${file}`);

            app.use('/api', route.default);
        }
    } catch (error) {
        console.error('Error reading routes:', error);
    }
})();
process.on('uncaughtException', function (exception) {
    console.log(exception); // to see your exception details in the console
    // if you are on production, maybe you can send the exception details to your
    // email as well ?
});

app.listen(port, `0.0.0.0`, () => {

    setTimeout(() => {
        console.log(`Your backend REST api endpoint is at
           Local:            http://localhost:${port}/api
       
        `
        )
    }, 1000);


});