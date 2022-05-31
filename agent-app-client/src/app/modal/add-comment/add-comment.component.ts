import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  public form: FormGroup;
  public ratingCtrl: FormControl;
  public titleCtrl: FormControl;
  public contentCtrl: FormControl;

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    this.ratingCtrl = new FormControl("", [Validators.required]);
    this.titleCtrl = new FormControl("", [Validators.required]);
    this.contentCtrl = new FormControl("", [Validators.required]);

    this.form = new FormGroup({
      'ratingCtrl': this.ratingCtrl,
      'titleCtrl': this.titleCtrl,
      'contentCtrl': this.contentCtrl,
    })
  }

  ngOnInit(): void {
  }

}
