import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyDto } from '../model/CompanyDto';
import { NewCommentDto } from '../model/NewCommentDto';
import { NewCompanyDto } from '../model/NewCompanyDto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  headers = new HttpHeaders({'Content-Type' : 'application/json', 
                             'Authorization' : `Bearer ${localStorage.jwt}`});

  constructor(private _http: HttpClient) { }

  getCompanies() : Observable<CompanyDto[]> {
    return this._http.get<CompanyDto[]>(environment.apiUrl + "/company/approved");
  }

  getCompany(id: number) : Observable<CompanyDto> {
    return this._http.get<CompanyDto>(environment.apiUrl + "/company/"+id);
  }

  getCompanyRequests() : Observable<CompanyDto[]> {
    return this._http.get<CompanyDto[]>(environment.apiUrl + "/company/unapproved", {headers: this.headers});
  }

  registerCompany(dto: NewCompanyDto) {
    return this._http.post(environment.apiUrl + "/company", dto, {headers: this.headers});
  }
}
