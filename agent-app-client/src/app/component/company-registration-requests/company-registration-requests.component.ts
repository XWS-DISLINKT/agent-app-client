import { Component, OnInit } from '@angular/core';
import { CompanyDto } from 'src/app/model/CompanyDto';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-registration-requests',
  templateUrl: './company-registration-requests.component.html',
  styleUrls: ['./company-registration-requests.component.css']
})
export class CompanyRegistrationRequestsComponent implements OnInit {
  text: string = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
  requests: CompanyDto[] = []

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanyRequests().subscribe((response) => {
    this.requests = response;
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

  approveRequest(id: number){
    this.companyService.approveCompany(id, true).subscribe((response) => {
      location.reload();
    })
  }

}
