import { Component, OnInit } from '@angular/core';
import { JobDto } from 'src/app/model/JobDto';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  text: string = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
  jobs: JobDto[] = []
  
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((response) => {
      this.jobs = response;
    })
  }

}
