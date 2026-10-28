import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  standalone: false,
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent {
  passwordVisible = false;
}
