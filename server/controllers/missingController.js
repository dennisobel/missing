import db from "./../models";

const missingController = {};


missingController.post = (req,res) => {
    const {
        firstname,
        middlename,
        lastname,      
        image,
        dateofbirth,        
        lastseen,        
        family:{
            ffirstname,
            fmiddlename,
            flastname,
            mobile,
            ward,
            stationname,
            relation
        },        
        bloodtype
    } = req.body;
    
    console.log(req.body)
    
    const missing = new db.Missing({
        firstname,
        middlename,
        lastname,
        image,
        dateofbirth,
        lastseen,
        family:{
            ffirstname,
            fmiddlename,
            flastname,
            mobile,
            ward,
            stationname,
            relation
        },
        bloodtype
    })
    
    missing.save().then((newMissing)=>{
        res.status(200).json({
            success: true,
            data: newMissing
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err
        });
    });
}

missingController.get = (req,res) => {
    db.Missing
        .find({})
        .then((missings) => {
        return res.status(200).json({
            success: true,
            data: missings
        })
    })
        .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

missingController.delete = (req,res) =>{
    db.Missing
    .remove({
        _id:req.params.id
    },(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
}

export default missingController;