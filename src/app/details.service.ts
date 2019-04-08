import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

//<---------------------this is booking service----------------------->
private bookingUrl = 'http://localhost:3001/api/booking';

constructor(private http: HttpClient) { }

addRemoteBooking(booking):Observable<any>{
  return this.http.post(this.bookingUrl,booking);
}

getRemoteBooking():Observable<[]> {
  return this.http.get<[]>(this.bookingUrl);  
}

}
