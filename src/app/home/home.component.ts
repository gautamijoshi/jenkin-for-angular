import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product:any;
  constructor(public service:DataService) { }

  ngOnInit() {
   let observableResult= this.service.Select();
   observableResult.subscribe((result)=>{
     this.product=result;
   });
  }

}
