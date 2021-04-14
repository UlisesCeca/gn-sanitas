import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public login(user: User): void {
    console.log('bien')
  }

  public showLoginError(error: string): void {
    console.log('mal')
  }

}
