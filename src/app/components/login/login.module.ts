import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { LoginComponent } from './login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    LoginPanelComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    LoginPanelComponent
  ]
})
export class LoginModule { }
