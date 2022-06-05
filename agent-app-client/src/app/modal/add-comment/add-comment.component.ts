import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewCommentDto } from 'src/app/model/NewCommentDto';
import { CommentService } from 'src/app/service/comment.service';

export interface DialogData {
  companyId: number;
}

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
  public companyId: number = -1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private commentService: CommentService, public dialogRef: MatDialogRef<AddCommentComponent>) {
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

  onSave() {
    if (this.form.valid) {
      //console.log(this.data.companyId)
      let dto: NewCommentDto = {companyId: this.data.companyId, title: this.titleCtrl.value, content: this.contentCtrl.value, rating: this.ratingCtrl.value}
      this.commentService.createComment(dto).subscribe((response) => {
        this.dialogRef.close();
      })

    }
  }

}
