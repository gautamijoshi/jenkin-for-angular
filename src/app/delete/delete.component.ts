import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  prod={"Prod_No":"","Prod_Name":"","Prod_price":""};
  constructor(public service:DataService,
    public router:Router,
    public route:ActivatedRoute)  { }

ngOnInit() {
      this.route.paramMap.subscribe((data)=>{
      var No=data.get("Prod_No");
     var observableResult=this.service.Delete(No);
      observableResult.subscribe((result)=>{
        console.log(result);
        this.router.navigate(["/home"]);
      
      });
    });
  }
}
