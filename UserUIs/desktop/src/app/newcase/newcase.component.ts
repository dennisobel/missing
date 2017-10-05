import { Component } from '@angular/core';

@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.css']
})
export class NewcaseComponent{
	title:string="New Case";

	selectedValue:string;
	bloodtypes=[
		{value:"O-", type:"O-"},
		{value:"O+", type:"O+"},
		{value:"A-", type:"A-"},
		{value:"A+", type:"A+"},
		{value:"B-", type:"B-"},
		{value:"B+", type:"B+"},
		{value:"AB-", type:"AB-"},
		{value:"AB+", type:"AB+"}
		
	]

	phenotypes=[
		{
			name:"Cleft Chin",
			img:"https://lh4.googleusercontent.com/-b2YPfa2Ze-o/UJHEDa3RE8I/AAAAAAAAAV0/5TPFwU1a7xI/s1600/Phenotypes.png"	
		},
		{
			name:"Attached Earlobes",
			img:"https://lh4.googleusercontent.com/-b2YPfa2Ze-o/UJHEDa3RE8I/AAAAAAAAAV0/5TPFwU1a7xI/s1600/Phenotypes.png"
		},
		{
			name:"Tongue Roll",
			img:"https://lh4.googleusercontent.com/-b2YPfa2Ze-o/UJHEDa3RE8I/AAAAAAAAAV0/5TPFwU1a7xI/s1600/Phenotypes.png"
		},
		{
			name:"Mid-digital hair",
			img:"https://lh4.googleusercontent.com/-b2YPfa2Ze-o/UJHEDa3RE8I/AAAAAAAAAV0/5TPFwU1a7xI/s1600/Phenotypes.png"
		},
		{
			name:"Freckles",
			img:"https://lh4.googleusercontent.com/-b2YPfa2Ze-o/UJHEDa3RE8I/AAAAAAAAAV0/5TPFwU1a7xI/s1600/Phenotypes.png"
		}
		
	]

	relation=[
		"Father","Mother","Sibling","Guardian"
	]

	step = 0;

	setStep(index: number) {
	this.step = index;
	}

	nextStep() {
	this.step++;
	}

	prevStep() {
	this.step--;
	}

	onSubmit(){
		var vfname;
		var vmname;
		var vlname;
		var vdob;
		var vbtype;
		var pfname;
		var pmname;
		var plname;
		var pemail;
		var pmobile;
		var prel;
		var vlseen;
		var vprof;
		var newcase;

		vfname=document.getElementById("vfname");		
		vmname=document.getElementById("vmname");
		vlname=document.getElementById("vlname");
		vdob=document.getElementById("vdob");
		vbtype=document.getElementById("vbtype");
		pfname=document.getElementById("pfname");
		pmname=document.getElementById("pmname");
		plname=document.getElementById("plname");
		pemail=document.getElementById("pemail");		
		pmobile=document.getElementById("pmobile");
		prel=document.getElementById("prel");
		vlseen=document.getElementById("vlseen");
		vprof=document.getElementById("vprof");

		var fname = vfname.value;
		var mname = vmname.value;
		var lname = vlname.value;
		var dob = vdob.value;
		var btype = vbtype.value;
		var fname2 = pfname.value;
		var mname2 = pmname.value;
		var lname2 = plname.value;
		var email = pemail.value;
		var mobile = pmobile.value;
		var rel = prel.value;
		var lseen = vlseen.value;
		var prof = vprof.value;

		newcase={
			fname,
			mname,
			lname,
			dob,
			btype,
			fname2,
			mname2,
			lname2,
			email,
			mobile,
			rel,
			lseen,
			prof
		}

		console.log(newcase)
	}

}
