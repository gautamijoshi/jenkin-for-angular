import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
prod={"Prod_No":"","Prod_Name":"","Prod_price":""};
  constructor(public service:DataService,
              public router:Router,
              public route:ActivatedRoute)  { }

  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      var Prod_No=data.get("Prod_No");
      let observableResult=this.service.SelectByNO(Prod_No);
      observableResult.subscribe((result)=>{
        this.prod=result[0];
      });
    });
  }

  Update()
  {
    let observableResult=this.service.Update(this.prod);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(["/home"]);
    });
  }
}
