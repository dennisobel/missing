import db from "./../models";

const foundController = {};

foundController.post = (req,res) => {
    const {
        knownname,
        assumedage,
        knownkinname,
        image,    
        wherefound,
        bloodtype,
        careof  
    } = req.body;
    
    console.log(req.body);
    
    const found = new db.Found({
        knownname,
        assumedage,
        knownkinname,
        image,    
        wherefound,
        bloodtype,
        careof  
    })
    
    found.save().then((newFound)=>{
        res.status(200).json({
            success: true,
            data: newFound
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err
        });
    });
}

foundController.get = (req,res) => {
    db.Found
        .find({})
        .then((founds) => {
        return res.status(200).json({
            success: true,
            data: founds
        })
    })
        .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

foundController.delete = (req,res)=>{
    db.Found
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

export default foundController;









