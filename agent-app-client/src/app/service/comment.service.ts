import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentDto } from '../model/CommentDto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  headers = new HttpHeaders({'Content-Type' : 'application/json', 
                             'Authorization' : `Bearer ${localStorage.jwt}`});

  constructor(private _http: HttpClient) { }

  getComments(companyId: number) : Observable<CommentDto[]> {
    return this._http.get<CommentDto[]>(environment.apiUrl + "/comment/company/"+companyId);
  }
}
