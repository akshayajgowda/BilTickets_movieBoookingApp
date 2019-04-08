import { Injectable } from '@angular/core';
//<--------------- Here we are calling express ----------->
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //<--------------- Here we are calling express ----------->
  private customerUrl = 'http://localhost:3001/api/customers';

  constructor(private http: HttpClient) { }
  
//<--------------- Here we are calling express ends ----------->

  getRemoteCustomers():Observable<[]> {
      return this.http.get<[]>(this.customerUrl);
  } 

  addRemoteCustomer(customer):Observable<any>{
    return this.http.post(this.customerUrl,customer);
  }

}
