import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDto } from 'src/app/model/CompanyDto';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies : CompanyDto[] = [];
  text: string = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
  
  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((response) => {
      this.companies = response;
      console.log(this.companies.length)
    })
  }

  formatEmployeesNumberRange(nr: string){
    if(nr === "BELOW20"){
      return "<20";
    }
    if(nr === "BELOW50"){
      return "21-50";
    }
    if(nr === "BELOW100"){
      return "51-100";
    }
    if(nr === "BELOW250"){
      return "101-250";
    }
    if(nr === "BELOW500"){
      return "251-500";
    }
    if(nr === "BELOW1000"){
      return "501-1000";
    }
    if(nr === "ABOVE1000"){
      return "1000+";
    }
    return "";
  }

}
