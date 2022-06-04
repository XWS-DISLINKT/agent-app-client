import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddCommentComponent } from 'src/app/modal/add-comment/add-comment.component';
import { AddInterviewReviewComponent } from 'src/app/modal/add-interview-review/add-interview-review.component';
import { AddJobComponent } from 'src/app/modal/add-job/add-job.component';
import { AddSalaryReviewComponent } from 'src/app/modal/add-salary-review/add-salary-review.component';
import { CommentDto } from 'src/app/model/CommentDto';
import { CompanyDto } from 'src/app/model/CompanyDto';
import { InterviewReviewDto } from 'src/app/model/InterviewReviewDto';
import { JobDto } from 'src/app/model/JobDto';
import { SalaryReviewDto } from 'src/app/model/SalaryReviewDto';
import { CommentService } from 'src/app/service/comment.service';
import { CompanyService } from 'src/app/service/company.service';
import { InterviewReviewService } from 'src/app/service/interview-review.service';
import { JobService } from 'src/app/service/job.service';
import { SalaryReviewService } from 'src/app/service/salary-review.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  easy = 9
  medium = 68
  hard = 23

  company: CompanyDto = {name: "", about:"", email:"", employeesNumberRange:"", id:0, industry:"", location:"", phoneNumber: "", rating:0};
  comments: CommentDto[] = []
  interviewReviews: InterviewReviewDto[] = []
  salaryReviews: SalaryReviewDto[] = []
  jobs: JobDto[] = []
  interviewReviewRating: number = 0;
  selectionProcessDuration: number = 0;
  salaryReviewsNumber: number = 0;

  constructor(public matDialog: MatDialog, private companyService: CompanyService, private salaryReviewService: SalaryReviewService, private jobService: JobService, private commentService:CommentService, private interviewReviewService: InterviewReviewService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var ids = this.route.snapshot.paramMap.get('id');
    let id: number = 0
    if(ids){
      id = +ids;
    }
    this.commentService.getComments(id).subscribe((response) => {
      this.comments = response;
    })
    this.jobService.getJobsForCompany(id).subscribe((response) => {
      this.jobs = response;
    })
    this.salaryReviewService.getSalaryReviewsForCompany(id).subscribe((response) => {
      this.salaryReviews = response;
    })
    this.interviewReviewService.getInterviewReviews(id).subscribe((response) => {
      this.interviewReviews = response;
      this.calculateInterviewReviewStats()
    })
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

  calculateInterviewReviewStats(){
    this.easy = 0;
    this.medium = 0;
    this.hard = 0;
    this.interviewReviewRating = 0;
    this.selectionProcessDuration = 0;

    let length: number = this.interviewReviews.length;
    if (length > 0){
      for(let ir of this.interviewReviews){
        if(ir.difficulty == "EASY"){
          this.easy++;
        }
        if(ir.difficulty == "MEDIUM"){
          this.medium++;
        }
        if(ir.difficulty == "HARD"){
          this.hard++;
        }
        this.interviewReviewRating += ir.rating;
        console.log(ir.selectionProcessDurationInWeeks)
        this.selectionProcessDuration += ir.selectionProcessDurationInWeeks;
      }
      this.easy = this.easy*100/length;
      this.medium = this.medium*100/length;
      this.hard = this.hard*100/length;
      this.interviewReviewRating = this.interviewReviewRating/length;
      this.selectionProcessDuration = this.selectionProcessDuration/length;
    }

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
