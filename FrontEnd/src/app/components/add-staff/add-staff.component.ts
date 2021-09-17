import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  staffForm: FormGroup;
  success:boolean = false;
  fail:boolean = false

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void{
    this.staffForm = this.fb.group({
    staffID: ['', Validators.required],
    givenName: ['', Validators.required],
    familyName: ['', Validators.required],
    password: ['', Validators.required],
    roleID: ['', Validators.required],
    })
  }

  onSubmit():void{

    this.success = this.fail = false;

    // If Valid 
    if (this.staffForm.status == "VALID") {
      console.log(this.staffForm.value)
      this.success = true;
      this.staffForm.reset();
    }
    else{
      this.fail=true
    }
  }

}
