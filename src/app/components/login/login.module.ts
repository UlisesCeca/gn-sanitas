import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    LoginPanelComponent
  ]
})
export class LoginModule { }
