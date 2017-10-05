import express from 'express';

// Controller Imports
import adminController from './controllers/adminController';
import careOfController from './controllers/careOfController';
import caseAgentController from './controllers/caseAgentController';
import foundController from './controllers/foundController';
import missingController from './controllers/missingController';
import closedFoundCaseController from './controllers/closedFoundCaseController';
import closedMissingCaseController from './controllers/closedMissingCaseController';




	
const routes = express();

// Post Routes
routes.post('/admin', adminController.post);
routes.post('/careof', careOfController.post);
routes.post('/caseagent', caseAgentController.post);
routes.post('/found', foundController.post);
routes.post('/missing', missingController.post);
routes.post('/closedfound', closedFoundCaseController.post);
routes.post('/closedmissing', closedMissingCaseController.post);

/** API path that will upload the files */

routes.post('/upload', function(req, res) {
    upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
});



//Get Routes
routes.get('/admin',adminController.get);
routes.get('/careof', careOfController.get);
routes.get('/caseagent', caseAgentController.get);
routes.get('/missing', missingController.get);
routes.get('/found', foundController.get);
routes.get('/closedfound', closedFoundCaseController.get);
routes.get('/closedmissing', closedMissingCaseController.get);

/** API path that will get the files */

routes.get('/file/:filename', function(req, res){
    gfs.collection('ctFiles'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        /** create read stream */
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "ctFiles"
        });
        /** set the proper content type */
        res.set('Content-Type', files[0].contentType)
        /** return response */
        return readstream.pipe(res);
    });
});

//delete
routes.delete("/missing/:id",missingController.delete);
routes.delete("/found/:id",foundController.delete);
export default routes;
