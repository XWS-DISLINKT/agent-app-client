import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../model/UserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({'Content-Type' : 'application/json', 
                             'Authorization' : `Bearer ${localStorage.jwt}`});

  constructor(private _http: HttpClient, private router: Router) { }

  loginUser(userEmail: string, userPassword: string){
    this._http.post<any>(environment.apiUrl + "/auth/login", {
      username: userEmail,
      password: userPassword
    }).subscribe(
      {
        next: (response) => {
          localStorage.setItem('jwt', response.accessToken);
          console.log(response.accessToken)
          this.router.navigate(['/companies']).then(()=>{
            location.reload();
            console.log(localStorage.getItem('jwt'));
          });
        },
        error: (error: HttpErrorResponse) => {
        }
      })
  }

  getUser(): Observable<UserDto>{
    return this._http.get<UserDto>(environment.apiUrl + "/auth", {headers: this.headers})
  }

  registerUser(userEmail: string, userPassword: string) {
    return this._http.post(environment.apiUrl + "/auth/signup", {
      email: userEmail,
      password: userPassword
    });
  }
}
