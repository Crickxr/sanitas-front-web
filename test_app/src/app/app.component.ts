import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formGroup: FormGroup;
  error: boolean = false;

  constructor (private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
      remember: new FormControl(false, []),
    },{updateOn:'submit'});
  }
  
  onClickAcces() {
    (this.formGroup.valid) ? console.log('OK'): this.error = true;
    if(this.formGroup.updateOn == 'submit') {
      this.formGroup.setControl( "email", new FormControl(this.formGroup.value.email, { validators: [Validators.required, Validators.email], updateOn:'change'} ));
      this.formGroup.setControl( "password", new FormControl(this.formGroup.value.password, { validators: [Validators.required, Validators.min(5)], updateOn:'change'} ));
    }
  }

  ngAfterContentInit () {
    var el = document.getElementsByClassName('mat-mdc-text-field-wrapper');
    for (let i = 0; i < el.length; i++) {
      el[i].setAttribute('style', 'background-color: white !important');
    }
  }
  
}