import {
  AbstractControl,
  ValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export class Customvalidator {
  static mustMatch(
    content: string,
    checkcontent: string
  ): ValidationErrors | null {
    return (formGroup: FormGroup) => {
      const contentval = formGroup.controls[content];
      const contenttwo = formGroup.controls[checkcontent];

      if (contenttwo.errors && !contenttwo?.errors['mustMatch']) {
        return;
      }
      if (contentval.value != contenttwo.value) {
        contenttwo.setErrors({ mustMatch: true });
      } else {
        contenttwo.setErrors(null);
      }
      return null;
    };
  }
}
