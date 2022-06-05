import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface DialogData {
  companyId: number;
}

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  public form: FormGroup;
  public now: Date = new Date();
  public positionCtrl: FormControl;
  public seniorityCtrl: FormControl;
  public dateCtrl: FormControl;
  public locationCtrl: FormControl;
  public descriptionCtrl: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,  public dialogRef: MatDialogRef<AddJobComponent>) {
    this.positionCtrl = new FormControl("", [Validators.required]);
    this.seniorityCtrl = new FormControl("", [Validators.required]);
    this.dateCtrl = new FormControl("", [Validators.required]);
    this.locationCtrl = new FormControl("", [Validators.required]);
    this.descriptionCtrl = new FormControl("", []);

    this.form = new FormGroup({
      'positionCtrl': this.positionCtrl,
      'seniorityCtrl': this.seniorityCtrl,
      'dateCtrl': this.dateCtrl,
      'locationCtrl': this.locationCtrl,
      'descriptionCtrl': this.descriptionCtrl,
    })
  }

  ngOnInit(): void {
  }

}
