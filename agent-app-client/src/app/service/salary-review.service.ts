import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SalaryReviewDto } from '../model/SalaryReviewDto';

@Injectable({
  providedIn: 'root'
})
export class SalaryReviewService {

  constructor(private _http: HttpClient) { }

  getSalaryReviewsForCompany(companyId: number) : Observable<SalaryReviewDto[]> {
    return this._http.get<SalaryReviewDto[]>(environment.apiUrl + "/salary-reviews/company/"+companyId);
  }
}
