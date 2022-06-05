import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InterviewReviewDto } from '../model/InterviewReviewDto';
import { NewInterviewReviewDto } from '../model/NewInterviewReviewDto';

@Injectable({
  providedIn: 'root'
})
export class InterviewReviewService {
  
  headers = new HttpHeaders({'Content-Type' : 'application/json', 
                             'Authorization' : `Bearer ${localStorage.jwt}`});
                             
  constructor(private _http: HttpClient) { }

  getInterviewReviews(companyId: number) : Observable<InterviewReviewDto[]> {
    return this._http.get<InterviewReviewDto[]>(environment.apiUrl + "/interview-review/company/"+companyId);
  }
  createInterviewReview(dto: NewInterviewReviewDto) {
    return this._http.post(environment.apiUrl + "/interview-review", dto, {headers: this.headers});
  }
}
