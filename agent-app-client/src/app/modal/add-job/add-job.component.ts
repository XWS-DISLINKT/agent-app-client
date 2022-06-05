import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewJobDislinkedDto } from 'src/app/model/NewJobDislinkedDto';
import { NewJobDto } from 'src/app/model/NewJobDto';
import { JobService } from 'src/app/service/job.service';

export interface DialogData {
  companyId: number;
  companyName: string;
  token: string;
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
  public shareCtrl: FormControl;
  public disabled = false;

  constructor(private jobService: JobService, @Inject(MAT_DIALOG_DATA) public data: DialogData,  public dialogRef: MatDialogRef<AddJobComponent>) {
    this.positionCtrl = new FormControl("", [Validators.required]);
    this.seniorityCtrl = new FormControl("", [Validators.required]);
    this.dateCtrl = new FormControl("", [Validators.required]);
    this.locationCtrl = new FormControl("", [Validators.required]);
    this.descriptionCtrl = new FormControl("", []);
    this.shareCtrl = new FormControl(false, []);
    if(this.data.token == ""){
      this.disabled = true;
    }


    this.form = new FormGroup({
      'positionCtrl': this.positionCtrl,
      'seniorityCtrl': this.seniorityCtrl,
      'dateCtrl': this.dateCtrl,
      'locationCtrl': this.locationCtrl,
      'descriptionCtrl': this.descriptionCtrl,
      'shareCtrl': this.shareCtrl,
    })
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.form.valid) {
      let dto: NewJobDto = {closingDate: this.dateCtrl.value, description: this.descriptionCtrl.value, location: this.locationCtrl.value, position: this.positionCtrl.value, seniority: this.seniorityCtrl.value}
      let jobDislinked: NewJobDislinkedDto = {companyName: this.data.companyName, description: this.descriptionCtrl.value, location: this.locationCtrl.value, position: this.positionCtrl.value}
      this.jobService.createJob(dto).subscribe((response) => {
        console.log("added to agent app")
        if(this.shareCtrl.value){
            this.jobService.shareJob(jobDislinked, this.data.token).subscribe((res) => {
              console.log("added to dislinked");
            });
            
        }
        this.dialogRef.close()
      })

    }
  }

}
