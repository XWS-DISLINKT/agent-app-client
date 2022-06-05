import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewInterviewReviewDto } from 'src/app/model/NewInterviewReviewDto';
import { InterviewReviewService } from 'src/app/service/interview-review.service';

export interface DialogData {
  companyId: number;
}

@Component({
  selector: 'app-add-interview-review',
  templateUrl: './add-interview-review.component.html',
  styleUrls: ['./add-interview-review.component.css']
})
export class AddInterviewReviewComponent implements OnInit {
  public form: FormGroup;
  public ratingCtrl: FormControl;
  public titleCtrl: FormControl;
  public contentCtrl: FormControl;
  public difficultyCtrl: FormControl;
  public hrInterviewCtrl: FormControl;
  public technicalInterviewCtrl: FormControl;

  constructor(private interviewReviewService: InterviewReviewService, @Inject(MAT_DIALOG_DATA) public data: DialogData,  public dialogRef: MatDialogRef<AddInterviewReviewComponent>) {
    this.ratingCtrl = new FormControl("", [Validators.required]);
    this.titleCtrl = new FormControl("", [Validators.required]);
    this.contentCtrl = new FormControl("", [Validators.required]);
    this.difficultyCtrl = new FormControl("", [Validators.required]);
    this.hrInterviewCtrl = new FormControl("");
    this.technicalInterviewCtrl = new FormControl("");

    this.form = new FormGroup({
      'ratingCtrl': this.ratingCtrl,
      'titleCtrl': this.titleCtrl,
      'contentCtrl': this.contentCtrl,
      'difficultyCtrl': this.difficultyCtrl,
      'hrInterviewCtrl': this.hrInterviewCtrl,
      'technicalInterviewCtrl': this.technicalInterviewCtrl,
    })
  }

  ngOnInit(): void {
  }
  onSave() {
    //if (this.form.valid) {
      let dto: NewInterviewReviewDto = {companyId: this.data.companyId, title: this.titleCtrl.value, hrInterview: this.hrInterviewCtrl.value, technicalInterview: this.technicalInterviewCtrl.value, rating: this.ratingCtrl.value, difficulty: this.difficultyCtrl.value}
      this.interviewReviewService.createInterviewReview(dto).subscribe((response) => {
        this.dialogRef.close()
      })

    //}
  }

}
