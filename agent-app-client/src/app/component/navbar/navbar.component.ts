import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  role = 'ROLE_COMPANY_OWNER'
  constructor() { }

  ngOnInit(): void {
  }

}
