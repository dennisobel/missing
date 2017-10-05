import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunited',
  templateUrl: './reunited.component.html',
  styleUrls: ['./reunited.component.css']
})
export class ReunitedComponent implements OnInit {
	title:string="Reunited";
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
