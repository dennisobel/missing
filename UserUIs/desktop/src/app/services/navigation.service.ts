import { Injectable } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component"
import { NewcaseComponent } from '../newcase/newcase.component';
import { MissingComponent } from '../missing/missing.component';
import { FoundComponent } from '../found/found.component';
import { ReunitedComponent } from '../reunited/reunited.component';


@Injectable()
export class NavigationService{
	navigate:any;
  constructor(){
  	
  }

  navigateTo(value:string){
  	//console.log(value)
  	this.navigate = value
  }

}
