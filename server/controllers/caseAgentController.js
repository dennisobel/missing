import db from "./../models";

const caseAgentController = {};

caseAgentController.post = (req,res) => {
    const {
        firstname,
        middlename,
        lastname,            
        mobile,          
        stationname,         
        workId,
        password
        
    } = req.body;
    console.log(req.body);
    //validation

    const caseagent = new db.CaseAgent({
        firstname,
        middlename,
        lastname,
        mobile,
        stationname,        
        workId,
        password
        
    });

    caseagent.save().then((newCaseAgent)=>{
        res.status(200).json({
            success: true,
            data: newCaseAgent
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err
        });
    });
}

caseAgentController.get = (req,res) => {
    db.CaseAgent
        .find({})
        .then((caseagents) => {
        return res.status(200).json({
            success: true,
            data: caseagents
        })
    })
        .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

export default caseAgentController