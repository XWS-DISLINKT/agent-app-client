import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-salary-review',
  templateUrl: './add-salary-review.component.html',
  styleUrls: ['./add-salary-review.component.css']
})
export class AddSalaryReviewComponent implements OnInit {
  public form: FormGroup;
  public positionCtrl: FormControl;
  public seniorityCtrl: FormControl;
  public salaryCtrl: FormControl;

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    this.positionCtrl = new FormControl("", [Validators.required]);
    this.seniorityCtrl = new FormControl("", [Validators.required]);
    this.salaryCtrl = new FormControl("", [Validators.required]);

    this.form = new FormGroup({
      'positionCtrl': this.positionCtrl,
      'seniorityCtrl': this.seniorityCtrl,
      'salaryCtrl': this.salaryCtrl,
    })
  }

  ngOnInit(): void {
  }

}
