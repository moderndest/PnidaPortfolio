import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
type Field ="password"
type FormErrors ={[u in Field]:string}


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public password =false;
  public wrongpass = false;
  accessForm!: UntypedFormGroup;

  formErrors: FormErrors = {
    password: ""
  };
  validationMessages = {
    password: {
      required: "Password is required."
    }
  };
  
 
 
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  access(){
    if(this.accessForm.value['password'] === 'AvT609X')
    {
      this.wrongpass = false;
      this.password = true;
      // console.log('122');
    } else {
      this.wrongpass = true;
      this.password = false;
      // console.log('25');
    }

    // this.password = true;
    // console.log(this.password);
    // console.log(this.accessForm.value['password']);
    // this.accessForm.value["password"];

  }

  buildForm() {
    this.accessForm = this.fb.group({
      // email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          // Validators.minLength(6),
          // Validators.maxLength(25),
          Validators.required
        ]
      ]
    });
  
  
    this.accessForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }
  
  onValueChanged(data?: any) {
    if (!this.accessForm) {
      return;
    }
    const form = this.accessForm;
    for (const field in this.formErrors) {
      if (
        Object.prototype.hasOwnProperty.call(this.formErrors, field) &&
        ( field === "password")
      ) {
        // clear previous error message (if any)
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${
                  (messages as { [key: string]: string })[key]
                } `;
              }
            }
          }
        }
      }
    }
  }
  
  
 
 
 
 

}
