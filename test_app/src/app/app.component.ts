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
    
  
    var el = document.getElementsByClassName('mat-mdc-text-field-wrapper');
    // el.style = 'background-color: white !important;';
    console.log(el);
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
      remember: new FormControl(false, []),
    },{updateOn:'submit'});

    // setInterval(() => { console.log(this.formGroup.value) }, 2000);
  }
  

  onClickAcces() {
    (this.formGroup.valid) ? console.log('OK'): this.error = true;
  }
  
}