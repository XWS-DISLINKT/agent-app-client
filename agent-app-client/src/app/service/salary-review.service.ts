import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewSalaryReviewDto } from '../model/NewSalaryReviewDto';
import { SalaryReviewDto } from '../model/SalaryReviewDto';

@Injectable({
  providedIn: 'root'
})
export class SalaryReviewService {

  constructor(private _http: HttpClient) { }
  
  headers = new HttpHeaders({'Content-Type' : 'application/json', 
                             'Authorization' : `Bearer ${localStorage.jwt}`});

  getSalaryReviewsForCompany(companyId: number) : Observable<SalaryReviewDto[]> {
    return this._http.get<SalaryReviewDto[]>(environment.apiUrl + "/salary-reviews/company/"+companyId);
  }
  
  createSalaryReview(dto: NewSalaryReviewDto) {
    return this._http.post(environment.apiUrl + "/salary-reviews", dto, {headers: this.headers});
  }
}
