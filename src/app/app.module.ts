import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPanelComponent } from './components/login/login-panel/login-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
