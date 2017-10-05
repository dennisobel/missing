import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
  
})
export class SidenavComponent{
	whereto:any;
	sidenav=[
		{value:"/newcase", viewValue:"New Case"},
		{value:"/missing", viewValue:"Missing"},
		{value:"/found", viewValue:"Found"},
		{value:"/reunited", viewValue:"Reunited"}
	]

  constructor(){}

  
}
