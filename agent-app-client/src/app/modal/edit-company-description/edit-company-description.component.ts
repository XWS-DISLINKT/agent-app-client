import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyService } from 'src/app/service/company.service';

export interface DialogData {
  description: string;
}

@Component({
  selector: 'app-edit-company-description',
  templateUrl: './edit-company-description.component.html',
  styleUrls: ['./edit-company-description.component.css']
})
export class EditCompanyDescriptionComponent implements OnInit {
  public form: FormGroup;
  public contentCtrl: FormControl;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private companyService: CompanyService, public dialogRef: MatDialogRef<EditCompanyDescriptionComponent>) { 
    this.contentCtrl = new FormControl(data.description, [Validators.required]);

    this.form = new FormGroup({
      'contentCtrl': this.contentCtrl,
    })
  }

  ngOnInit(): void {
  }
  onSave() {
    if (this.form.valid) {
      this.companyService.updateCompanyDescription(this.contentCtrl.value).subscribe((response) => {
        this.dialogRef.close()
      })

    }
  }

}
