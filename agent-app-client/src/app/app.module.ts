import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CompaniesComponent } from './component/companies/companies.component';
import { CompanyComponent } from './component/company/company.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { CompanyRegistrationRequestsComponent } from './component/company-registration-requests/company-registration-requests.component';
import { CompanyRegistrationComponent } from './component/company-registration/company-registration.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { AddCommentComponent } from './modal/add-comment/add-comment.component';
import { AddInterviewReviewComponent } from './modal/add-interview-review/add-interview-review.component';
import { AddSalaryReviewComponent } from './modal/add-salary-review/add-salary-review.component';
import { AddJobComponent } from './modal/add-job/add-job.component';
import { EditCompanyDescriptionComponent } from './modal/edit-company-description/edit-company-description.component';
import { ConnectProfilesComponent } from './modal/connect-profiles/connect-profiles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompaniesComponent,
    CompanyComponent,
    JobsComponent,
    CompanyRegistrationRequestsComponent,
    CompanyRegistrationComponent,
    RegistrationComponent,
    LoginComponent,
    AddCommentComponent,
    AddInterviewReviewComponent,
    AddSalaryReviewComponent,
    AddJobComponent,
    EditCompanyDescriptionComponent,
    ConnectProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
