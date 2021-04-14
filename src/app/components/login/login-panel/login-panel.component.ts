import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPanelComponent implements OnInit {
  // Event that occurrs when the form is correct
  @Output()
  public readonly onFormSuccess: EventEmitter<User>;
  
  // Event that occurrs when the form is not valid
  @Output()
  public readonly onFormFail: EventEmitter<string>;

  public readonly loginForm: FormGroup;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder
    ) { 
      this.onFormSuccess =  new EventEmitter<User>();
      this.onFormFail = new EventEmitter<string>()
      this.loginForm = this.formBuilder.group({
        email: this.formBuilder.control('', [Validators.required, Validators.email]),
        password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        remember: this.formBuilder.control(false)
      });
    }

  ngOnInit(): void {
    this.changeDetectorRef.detach();
  }

  public submitForm(): void {
    let user: User;

    if (this.loginForm.valid) {
      user = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
        remember: this.loginForm.get('remember').value
      }
      this.onFormSuccess.emit(user);
    } else {
      this.onFormFail.emit('Formulario incorrecto');
    }
  }

}
