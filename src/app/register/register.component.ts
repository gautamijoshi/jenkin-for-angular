import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  prod={"Prod_No":"","Prod_Name":"","Prod_price":"","username":"","password":""};
  constructor(public service:DataService,
              public router:Router,
              public route:ActivatedRoute)  { }

  ngOnInit() {
   
  }

  Insert()
  {
    this.route.paramMap.subscribe((data)=>{
      let observableResult=this.service.Insert(this.prod);
      observableResult.subscribe((result)=>{
        this.router.navigate(["/home"]);
      });
    });

  }

  GoToHome()
  {
    this.router.navigate(["/home"]);
  }
}
