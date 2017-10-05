import db from "./../models";

const closedMissingCaseController = {};

closedMissingCaseController.post = (req,res) => {
	const{
		casemissing,
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
	}= req.body;

	console.log(req.body)

	const closedmissing = db.ClosedMissingCase({
		casemissing,
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

	closedmissing.save().then((newClosedMissing)=>{
		res.status(200).json({
			success:true,
			data:newClosedMissing
		});
	}).catch((err)=>{
		res.status(500).json({
			message:err
		})
	});
}

closedMissingCaseController.get = (req,res)=>{
	db.ClosedMissingCase
	.find({})
	.then((closedmissingcases)=>{
		return res.status(200).json({
			success:true,
			data:closedmissingcases
		})
	})
	.catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

export default closedMissingCaseController; 