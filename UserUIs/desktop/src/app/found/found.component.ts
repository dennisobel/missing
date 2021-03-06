import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {
	title:string="Found";
	person=[
		{
			"Name":"Dennis Obel",
			"DOB":"18/10/1989",
			"LastSeen":"Ngara Road - Nairobi",
			"Picture":"assets/img/2.jpg"
		},
		{
			"Name":"James O",
			"DOB":"10/09/1977",
			"LastSeen":"Waiyaki Way - Nairobi",
			"Picture":"assets/img/2.jpg"
		},
		{
			"Name":"Shem Ogembo",
			"DOB":"12/09/1987",
			"LastSeen":"Uhuru Highway - Nairobi",
			"Picture":"assets/img/2.jpg"
		},
	]

  constructor() { }

  ngOnInit() {
  }

}
