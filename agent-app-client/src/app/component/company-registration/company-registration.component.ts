import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewCompanyDto } from 'src/app/model/NewCompanyDto';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {public errorMessage: string;
  public hide = true;
  public confirmHide = true;
  public form: FormGroup;
  public nameCtrl: FormControl;
  public employeesCtrl: FormControl;
  public industryCtrl: FormControl;
  public websiteCtrl: FormControl;
  public emailCtrl: FormControl;
  public phoneNumberCtrl: FormControl;
  public aboutCtrl: FormControl;

  public PHONE_NUMBER_PATTERN: string = "[0-9+ /]*";

  constructor(private router: Router, private companyService: CompanyService) {
    this.errorMessage = "";

    this.nameCtrl = new FormControl("", [Validators.required]);
    this.employeesCtrl = new FormControl("", [Validators.required]);
    this.industryCtrl = new FormControl("", [Validators.required]);
    this.websiteCtrl = new FormControl("", [Validators.required]);
    this.emailCtrl = new FormControl("", [Validators.required, Validators.email]);
    this.phoneNumberCtrl = new FormControl("", [Validators.required, Validators.pattern(this.PHONE_NUMBER_PATTERN)]);
    this.aboutCtrl = new FormControl("", []);

    this.form = new FormGroup({
      'nameCtrl': this.nameCtrl,
      'employeesCtrl': this.employeesCtrl,
      'industryCtrl': this.industryCtrl,
      'websiteCtrl': this.websiteCtrl,
      'emailCtrl': this.emailCtrl,
      'phoneNumberCtrl': this.phoneNumberCtrl,
      'aboutCtrl': this.aboutCtrl,
    })
  }

  ngOnInit(): void {

  }

  onRegister() {
    if (this.form.valid) {
      let dto: NewCompanyDto = {about: this.aboutCtrl.value, email: this.emailCtrl.value, employeesNumberRange: this.employeesCtrl.value, id: 105, industry: this.industryCtrl.value, isApproved: false, location: this.websiteCtrl.value, name: this.nameCtrl.value, phoneNumber: this.phoneNumberCtrl.value}
      this.companyService.registerCompany(dto).subscribe((response) => {
        this.router.navigate(['/companies']).then(()=>{
          location.reload()});
      })

    }
  }


}

