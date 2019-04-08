import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
    //<--------------- Here we are calling express ----------->
    private movieUrl = 'http://localhost:3001/api/movies';
  
    constructor(private http: HttpClient) { }
    
  //<--------------- Here we are calling express ends ----------->
  
  getRemoteMovies():Observable<[]> {
    return this.http.get<[]>(this.movieUrl);  
  }

  getRemoteMoviesById(id):Observable<any> {
    return this.http.get<[]>(this.movieUrl+"/"+id);
} 

}
