import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public hide2 = true;
  public confirmHide = true;
  public errorMessage="";
  public form: FormGroup;
  public emailCtrl: FormControl;
  public passwordCtrl: FormControl;

  public PASSWORD_PATTERN: string = "[0-9+ /]*";

  constructor(private router: Router, private _snackBar: MatSnackBar, private authService: AuthService) {
    this.emailCtrl = new FormControl("", [Validators.required, Validators.email]);
    this.passwordCtrl = new FormControl("", [Validators.required]);

    this.form = new FormGroup({
      'emailCtrl': this.emailCtrl,
      'passwordCtrl': this.passwordCtrl
    })
  }

  ngOnInit(): void {

  }

  onSignIn() {
    if (this.form.valid) {
      this.authService.loginUser(this.emailCtrl.value, this.passwordCtrl.value)
    }
  }


}

