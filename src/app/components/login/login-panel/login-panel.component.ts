import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPanelComponent implements OnInit {

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.changeDetectorRef.detach();
  }

}
