import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyDto } from '../model/CompanyDto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http: HttpClient) { }

  getCompanies() : Observable<CompanyDto[]> {
    return this._http.get<CompanyDto[]>(environment.apiUrl + "/company/approved");
  }

  getCompany(id: number) : Observable<CompanyDto> {
    return this._http.get<CompanyDto>(environment.apiUrl + "/company/"+id);
  }

  getCompanyRequests() : Observable<CompanyDto[]> {
    return this._http.get<CompanyDto[]>(environment.apiUrl + "/company/unapproved");
  }
}
