import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    this.ratingCtrl = new FormControl("", [Validators.required]);
    this.titleCtrl = new FormControl("", [Validators.required]);
    this.contentCtrl = new FormControl("", [Validators.required]);
    this.difficultyCtrl = new FormControl("", [Validators.required]);
    this.hrInterviewCtrl = new FormControl("", [Validators.required]);
    this.technicalInterviewCtrl = new FormControl("", [Validators.required]);

    this.form = new FormGroup({
      'ratingCtrl': this.ratingCtrl,
      'titleCtrl': this.titleCtrl,
      'contentCtrl': this.contentCtrl,
      'difficultyCtrl': this.difficultyCtrl,
      'hrInterviewCtrl': this.contentCtrl,
      'technicalInterviewCtrl': this.technicalInterviewCtrl,
    })
  }

  ngOnInit(): void {
  }

}
