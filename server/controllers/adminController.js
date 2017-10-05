import db from "./../models";

const adminController = {};

adminController.post = (req,res) => {
    const { 
        mobile, 
        username, 
        password 
    } = req.body;
    console.log(req.body);
    //validation
    
    const admin = new db.Admin({
        mobile,
        username,
        password        
    });
    
    admin.save().then((newAdmin)=>{
        res.status(200).json({
            success: true,
            data: newAdmin
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err
        });
    });
}

adminController.get = (req,res) => {
    db.Admin
    .find({})
    .then((admins) => {
        return res.status(200).json({
            success: true,
            data: admins
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

export default adminController