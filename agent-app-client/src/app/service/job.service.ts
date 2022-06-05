import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobDto } from '../model/JobDto';
import { NewJobDislinkedDto } from '../model/NewJobDislinkedDto';
import { NewJobDto } from '../model/NewJobDto';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
  headers = new HttpHeaders({'Content-Type' : 'application/json', 
                             'Authorization' : `Bearer ${localStorage.jwt}`});

  constructor(private _http: HttpClient) { }

  getJobsForCompany(companyId: number) : Observable<JobDto[]> {
    return this._http.get<JobDto[]>(environment.apiUrl + "/job/company/"+companyId);
  }

  getJobs() : Observable<JobDto[]> {
    return this._http.get<JobDto[]>(environment.apiUrl + "/job");
  }

  createJob(dto: NewJobDto) {
    return this._http.post(environment.apiUrl + "/job", dto, {headers: this.headers});
  }
  
  shareJob(dto: NewJobDislinkedDto, token: string) {
    return this._http.post("http://localhost:8000/post/job", {
      job: dto,
      apiKey: token
    });
  }


}
