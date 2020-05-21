import { Component, OnInit, Inject } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(
      public service : PatientService,
      public dialogRef: MatDialogRef<AddDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Patient

  ) { }

  ngOnInit(): void {
    if(this.data){
      this.dialogRef.afterOpened().subscribe(()=>{
        this.populateForm();
      })
    }

  }

  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    name : new FormControl('',Validators.required),
    age: new FormControl(''),
    gender : new FormControl('1',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    phone : new FormControl('',Validators.minLength(10)),
    address : new FormControl(""),
    disease : new FormControl('',Validators.required),

  })

  populateForm(){
    this.form.setValue({
      ...this.data,
      gender : (this.data.gender == "male") ? "1": "2"
    })
  }


  onSubmit(){
    
    if(this.data){
      this.service.updatePatient(this.form.value).subscribe((data)=>{
          console.log("successfully updated", data);
      });
    }else{
      this.service.insertPatient(this.form.value)
        .subscribe(data=>{
          console.log("successfully posted", data)
        })
    }

    this.dialogRef.close();
  }


}
