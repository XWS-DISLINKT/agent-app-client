import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface DialogData {
  companyId: number;
}

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,  public dialogRef: MatDialogRef<AddSalaryReviewComponent>) {
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
