import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

export interface DialogData {
  token: string;
}

@Component({
  selector: 'app-connect-profiles',
  templateUrl: './connect-profiles.component.html',
  styleUrls: ['./connect-profiles.component.css']
})
export class ConnectProfilesComponent implements OnInit {
  
  public form: FormGroup;
  public contentCtrl: FormControl;

  constructor(private authService: AuthService, @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<ConnectProfilesComponent>) { 
    this.contentCtrl = new FormControl(data.token, [Validators.required]);

    this.form = new FormGroup({
      'contentCtrl': this.contentCtrl,
    })
  }

  ngOnInit(): void {
  }

  onSave(){
    this.authService.connectProfiles(this.contentCtrl.value).subscribe((res)=>{
      console.log(res);
      this.dialogRef.close();
    })
  }

}
