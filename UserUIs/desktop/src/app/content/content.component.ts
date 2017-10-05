import { Component } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
	title:any;
  constructor(){
  	
  }  

  onActivate(e){
    console.log(e.title)
    this.title=e.title;
  }
}
