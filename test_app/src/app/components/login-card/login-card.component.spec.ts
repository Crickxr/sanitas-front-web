import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { LoginCardComponent } from './login-card.component';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('error variable should be false by default', () => {
    expect(component.error).toBeFalse();
  });

  it('formGroup should be defined', () => {
    expect(component.formGroup).toBeDefined();
  });

  it('formGroup should be defined', () => {
    expect(component.shakeOnError).toBeDefined();
  });

  it('shakeOnError should equal to default by default', () => {
    expect(component.shakeOnError).toEqual('default');
  });

  it('user should update from form changes', (() => {
    const testUser = {
      email: 'test@test.com',
      password: '12345'
    };
    component.formGroup.controls['email'].setValue(testUser.email);
    component.formGroup.controls['password'].setValue(testUser.password);
    expect(component.formGroup.valid).toBeTrue();
  }));
});
