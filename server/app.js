import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";
import multer from "multer";
import path from "path"
import routes from './routes';

var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;

//mongoose.connect()
mongoose.connect('mongodb://dennisobel:SleepyeyeS2017@ds141524.mlab.com:41524/missing', () => {
  console.log('Contected to mongodb...');
});

var conn = mongoose.connection;
var gfs = Grid(conn.db)



const app = express();

app.use(cors());

app.use(function(req,res,next){
    var allowedOrigins = ["http://localhost:8100","http://localhost:3000/api/missing","http://localhost:3000/api/found","http://localhost:3000/api/careof","http://localhost:3000/api/caseagent","http://localhost:3000/api/upload"];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
	res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    return next();
})

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/api', routes);

/** Setting up storage using multer-gridfs-storage */

var storage = GridFsStorage({
    gfs : gfs,
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    },
    /** With gridfs we can store aditional meta-data along with the file */
    metadata: function(req, file, cb) {
        cb(null, { originalname: file.originalname });
    },
    root: 'ctFiles' //root name for collection to store files into
});

var upload = multer({ //multer settings for single upload
    storage: storage
}).single('file');

export default app;
