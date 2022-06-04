import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddCommentComponent } from 'src/app/modal/add-comment/add-comment.component';
import { AddInterviewReviewComponent } from 'src/app/modal/add-interview-review/add-interview-review.component';
import { AddJobComponent } from 'src/app/modal/add-job/add-job.component';
import { AddSalaryReviewComponent } from 'src/app/modal/add-salary-review/add-salary-review.component';
import { CompanyDto } from 'src/app/model/CompanyDto';
import { CompanyService } from 'src/app/service/company.service';

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
  company: CompanyDto = {name: "", about:"", email:"", employeesNumberRange:"", id:0, industry:"", location:"", phoneNumber: "", rating:0};
  constructor(public matDialog: MatDialog, private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var ids = this.route.snapshot.paramMap.get('id');
    let id: number = 0
    if(ids){
      id = +ids;
    }
    this.companyService.getCompany(id).subscribe((response) => {
      this.company = response;
    })
  }

  formatEmployeesNumberRange(nr: string){
    if(nr === "BELOW20"){ return "<20"; }
    if(nr === "BELOW50"){ return "21-50"; }
    if(nr === "BELOW100"){ return "51-100"; }
    if(nr === "BELOW250"){ return "101-250"; }
    if(nr === "BELOW500"){ return "251-500"; }
    if(nr === "BELOW1000"){ return "501-1000"; }
    if(nr === "ABOVE1000"){ return "1000+"; }
    return "";
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

  openAddSalaryReviewModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "add-comment-modal";
    dialogConfig.height = "400px";
    dialogConfig.width = "32%";
    const modalDialog = this.matDialog.open(AddSalaryReviewComponent, dialogConfig);
  }

  openAddJobModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "add-comment-modal";
    dialogConfig.height = "600px";
    dialogConfig.width = "32%";
    const modalDialog = this.matDialog.open(AddJobComponent, dialogConfig);
  }
}
