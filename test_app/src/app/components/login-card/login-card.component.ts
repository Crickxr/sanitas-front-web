import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition, query, group } from '@angular/animations';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  animations: [
    trigger('shake', [
      state(
        'default',
        style({
        })
      ),
      state(
        'shaky',
        style({
        })
      ),
      transition('* => shaky', [
        style({ transform: 'rotate(0)' }),
        animate('100ms', style({ transform: 'scale(1.3) rotate(2deg)' })),
        animate('100ms', style({ transform: 'scale(1.5) rotate(-2deg)' })),
        animate('100ms', style({ transform: 'scale(1.3) rotate(2deg)' })),
        animate('100ms', style({ transform: 'scale(1) rotate(0)' })),
      ]),
    ]),
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('1500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
    ])
  ]
})

export class LoginCardComponent {

  formGroup: FormGroup;
  error: boolean = false;
  shakeOnError = 'default';

  constructor (private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      remember: new FormControl(false, []),
    },{updateOn:'submit'});
    this.formGroup.valueChanges.subscribe( (el) => {
      console.log(this.formGroup)
      if (this.formGroup.valid) this.error = false;
    });
  }
  
  onClickAcces() {
    (this.formGroup.valid) ? this.onSuccess() : this.error = true;
    if(this.error == true) this.shake();
    if(this.formGroup.updateOn == 'submit') {
      this.formGroup.setControl( "email", new FormControl(this.formGroup.value.email, { validators: [Validators.required, Validators.email], updateOn:'change'} ));
      this.formGroup.setControl( "password", new FormControl(this.formGroup.value.password, { validators: [Validators.required, Validators.minLength(5)], updateOn:'change'} ));
    }
  }

  ngAfterContentInit () {
    var el = document.getElementsByClassName('mat-mdc-text-field-wrapper');
    for (let i = 0; i < el.length; i++) {
      el[i].setAttribute('style', 'background-color: white !important');
    }
  }

  shake() {
    this.shakeOnError = 'shaky';
    setTimeout(() => { this.shakeOnError = 'default' }, 400);
  }

  onSuccess() {
    console.log('OK');
    const MyPromise = Promise;
    const confetti = require('canvas-confetti');
    confetti.Promise = MyPromise;


    var myCanvas = document.getElementById('canvas');

    var myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 200,
      spread: 160
    });

    console.log(confetti, myCanvas, myConfetti);

  }
  
}