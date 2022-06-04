import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InterviewReviewDto } from '../model/InterviewReviewDto';

@Injectable({
  providedIn: 'root'
})
export class InterviewReviewService {

  constructor(private _http: HttpClient) { }

  getInterviewReviews(companyId: number) : Observable<InterviewReviewDto[]> {
    return this._http.get<InterviewReviewDto[]>(environment.apiUrl + "/interview-review/company/"+companyId);
  }
}
