import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  Select()
  {
    return this.http.get("http://localhost:7777/product");
  }

  SelectByNO(Prod_No)
  {
    return this.http.get("http://localhost:7777/product/"+Prod_No);
  }

  Update(prodobj)
  {
    return this.http.put("http://localhost:7777/product/"+prodobj.Prod_No,prodobj);
  }

  Delete(Prod_No)
  {
    return this.http.delete("http://localhost:7777/product/"+Prod_No);
  }

  Insert(prodobj)
  {
    return this.http.post("http://localhost:7777/product",prodobj);
  }
}
