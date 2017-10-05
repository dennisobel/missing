import db from "./../models";

const careOfController = {};

careOfController.post = (req,res) => {
    const { 
        name:{
            firstname,
            lastname,
            middlename
        },
        mobile,
        address:{
            ward,
            org
        },
        password
    } = req.body;
    console.log(req.body);
    //validation

    const careOf = new db.CareOf({
        name:{
            firstname,
            lastname,
            middlename
        },
        mobile,
        address:{
            ward,
            org
        },
        password       
    });

    //save to mongo
    careOf.save().then((newCareOf)=>{
        res.status(200).json({
            success: true,
            data: newCareOf
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err
        });
    });
}

careOfController.get = (req,res) => {
    db.CareOf
        .find({})
        .then((careofs) => {
        return res.status(200).json({
            success: true,
            data: careofs
        })
    })
        .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

export default careOfController;