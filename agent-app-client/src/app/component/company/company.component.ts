import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCommentComponent } from 'src/app/modal/add-comment/add-comment.component';
import { AddInterviewReviewComponent } from 'src/app/modal/add-interview-review/add-interview-review.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  text: string = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
  easy = 9
  medium = 68
  hard = 23
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddCommentModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "add-comment-modal";
    dialogConfig.height = "480px";
    dialogConfig.width = "32%";
    const modalDialog = this.matDialog.open(AddCommentComponent, dialogConfig);

  }

  openAddInterviewReviewModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "add-comment-modal";
    dialogConfig.height = "650px";
    dialogConfig.width = "32%";
    const modalDialog = this.matDialog.open(AddInterviewReviewComponent, dialogConfig);
  }
}
