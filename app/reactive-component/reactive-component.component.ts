/* import { Message } from '@angular/compiler/src/i18n/i18n_ast'; */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { emailMatcher, ValidateEmail } from './email-pattern-vaidation';
@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {
  unamepattern='^[a-zA-Z ]*$';
  pwdPattern=/^[0-9]*$/;
  emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  reactiveForm!: FormGroup;
  reactiveFormOne!: FormGroup;

  constructor() {}

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.unamepattern),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(this.pwdPattern),
      ]),
      email: new FormControl('', [Validators.required, ValidateEmail]),
    });
    this.setDefault();

    this.reactiveFormOne = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        confirmEmail: new FormControl('', [Validators.required]),
      },
      { validators: emailMatcher }
    );
  }

  setDefault() {
    let contact = {
      username: 'FisUser',
      email: 'fisuser@fisglobal.com',
      password: 54321,
    };
    this.reactiveForm.setValue(contact);
  }

  setValue() {
    let contact = {
      username: 'Aakanksha',
      email: 'Aakanksha.D@fisglobal.com',
      password: 12345,
    };

    this.reactiveForm.setValue(contact);
  }
  get emailControl() {
    return this.reactiveForm.controls['email'];
  }

  patchName() {
    let contact = {
      username: 'fis',
    };
    this.reactiveForm.patchValue(contact);
  }

  reset() {
    this.reactiveForm.reset();
  }
}


/* export function ValidateEmail(): ValidatorFn{ 
  return (control): ValidationErrors | null =>{
    if(!control.value){
      return null
    }
    if (control.value.endsWith("@fisglobal.com")) {
      return null
      }
    if (control.value.endsWith("@gmail.com")){
        return null;
      }

        return { invalidEmail: true}
      
  }
 } */

/* export function ValidateEmail(control: AbstractControl)
 {
    if (control.value.endsWith("@fisglobal.com")) {
          return null
          }
    else if (control.value.endsWith("@gmail.com")){
            return null;
          }
    else{
            return { invalidEmail: true}
          }
            
}
 */


/* export function ValidateMarks(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
        return null;
    }

    const hasUpperCase = false;

    const hasLowerCase = false;

    const hasNumeric = /[0-9]+/.test(value);

    const NumbersValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !NumbersValid ? {ValidateMarks:true}: null;
}
} */

