import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public hide = true;
  public hide2 = true;
  public confirmHide = true;
  public errorMessage="";
  public form: FormGroup;
  public emailCtrl: FormControl;
  public passwordCtrl: FormControl;
  public passwordRepeatedCtrl: FormControl;

  public PASSWORD_PATTERN: string = "[0-9+ /]*";

  constructor(private router: Router, private _snackBar: MatSnackBar, private authService: AuthService) {
    this.emailCtrl = new FormControl("", [Validators.required, Validators.email]);
    this.passwordCtrl = new FormControl("", [Validators.required]);
    this.passwordRepeatedCtrl = new FormControl("", [Validators.required]);

    this.form = new FormGroup({
      'emailCtrl': this.emailCtrl,
      'passwordCtrl': this.passwordCtrl,
      'passwordRepeatedCtrl': this.passwordRepeatedCtrl
    })
  }

  ngOnInit(): void {

  }

  onRegister() {
    this.errorMessage = "";
    if(this.passwordCtrl.value != this.passwordRepeatedCtrl.value){
      this.errorMessage = "Passwords don't match."
      return;
    }
    if (this.form.valid) {
      this.authService.registerUser(this.emailCtrl.value, this.passwordCtrl.value).subscribe((response) => {
        this.router.navigate(['/companies']).then();
      })
    }
  }


}

