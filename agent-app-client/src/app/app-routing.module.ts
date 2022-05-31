import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './component/companies/companies.component';
import { CompanyRegistrationRequestsComponent } from './component/company-registration-requests/company-registration-requests.component';
import { CompanyRegistrationComponent } from './component/company-registration/company-registration.component';
import { CompanyComponent } from './component/company/company.component';
import { JobsComponent } from './component/jobs/jobs.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company/id', component: CompanyComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'registration-requests', component: CompanyRegistrationRequestsComponent },
  { path: 'company-registration', component: CompanyRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
