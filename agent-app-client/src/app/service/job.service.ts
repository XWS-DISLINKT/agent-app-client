import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobDto } from '../model/JobDto';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }

  getJobsForCompany(companyId: number) : Observable<JobDto[]> {
    return this._http.get<JobDto[]>(environment.apiUrl + "/job/company/"+companyId);
  }

  getJobs() : Observable<JobDto[]> {
    return this._http.get<JobDto[]>(environment.apiUrl + "/job");
  }
}
