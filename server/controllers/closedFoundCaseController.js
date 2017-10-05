import db from "./../models";

const closedFoundCaseController = {};

closedFoundCaseController.post = (req,res) => {
	const{
		casefound,
		knownname,
	    assumedage,
	    knownkinname,
	    image,    
	    wherefound,
	    bloodtype,
	    careof
	}= req.body;

	console.log(req.body)

	const closedfound = db.ClosedFoundCase({
		casefound,
		knownname,
	    assumedage,
	    knownkinname,
	    image,    
	    wherefound,
	    bloodtype,
	    careof
	})

	closedfound.save().then((newClosedFound)=>{
		res.status(200).json({
			success:true,
			data:newClosedFound
		});
	}).catch((err)=>{
		res.status(500).json({
			message:err
		})
	});
}

closedFoundCaseController.get = (req,res)=>{
	db.ClosedFoundCase
	.find({})
	.then((closedfoundcases)=>{
		return res.status(200).json({
			success:true,
			data:closedfoundcases
		})
	})
	.catch((err)=>{
		return res.status(500).json({
			message:err
		})
	})
}

export default closedFoundCaseController; 