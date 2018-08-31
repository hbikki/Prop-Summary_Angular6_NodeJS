import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getProperties(): Observable<any> {
    return this.http.get<any>(/*link ti get data*/'');
  }
  getAllPropertyDetails(id , name ): Observable<any> {
    return this.http.get<any>(`/api/details/${id}/${name}`);


  }
}

