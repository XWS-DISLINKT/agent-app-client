import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/model/UserDto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role = '';
  currentUser : UserDto = {id: -1, email:"", role: "", companyId: -1}
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((response) => {
      this.currentUser = response;
      if(response != null){
        this.role = response.role;

      }
    })
  }

  onLogOut() {
    this.currentUser = {id: -1, email:"", role: "", companyId: -1}
    localStorage.clear();
    this.router.navigate(['/login']).then(()=>{
      location.reload()});
  }

}
