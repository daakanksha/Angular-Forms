import {  ValidatorFn,  ValidationErrors,  AbstractControl,  FormControl,} from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  // console.log(
  //   !control.value.endsWith('@fisglobal.com') &&
  //     !control.value.endsWith('@gmail.com'),
  //   'KKKK'
  // );
  // console.log(
  //   !control.value.endsWith('@fisglobal.com') ||
  //     !control.value.endsWith('@gmail.com'),
  //   'KKKK OR'
  // );
  console.log(!control.value.endsWith('@fisglobal.com'), 'FIS');
  console.log(!control.value.endsWith('@gmail.com'), 'GMAIL');
  if (
    !control.value.endsWith('@fisglobal.com') &&
    !control.value.endsWith('@gmail.com')
  ) {
    return { invalidEmail: true };
  }

  return null;
  /* if(!control.value){
        return null
      }
      if (control.value.endsWith("@fisglobal.com")) {
        return null
        }
      if (control.value.endsWith("@gmail.com")){
          return null;
        }
  
          return { invalidEmail: true}
         */
}

export const emailMatcher = (
  control: AbstractControl
): { [key: string]: boolean } => {
  const email = control.get('email');
  const confirm = control.get('confirmEmail');

  if (!email || !confirm) return null;
  return email.value === confirm.value ? null : { nomatch: true };
};
