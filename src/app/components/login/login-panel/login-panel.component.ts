import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
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
    private readonly formBuilder: FormBuilder
    ) { 
      this.onFormSuccess =  new EventEmitter<User>();
      this.onFormFail = new EventEmitter<string>()
      this.loginForm = this.formBuilder.group({
        email: this.formBuilder.control('', [Validators.required, Validators.email]),
        password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        remember: this.formBuilder.control(true)
      });
    }

  ngOnInit(): void {
  }

  /**
   * Método que comprueba si el formulario de login es correcto.
   * Si lo es, emite el evento onFormSuccess con el usuario proporcionado
   * en el formulario. Si no es correcto, emite el evento onFormFail con un
   * mensaje de error.
   */
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
