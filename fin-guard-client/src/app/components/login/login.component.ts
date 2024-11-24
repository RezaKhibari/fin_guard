import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          alert('Login successful!');
          // Redirect to dashboard or home page
        } else {
          alert(response.message);
        }
      },
      (error) => {
        console.error('Login failed', error);
        alert('An error occurred. Please try again.');
      }
    );
  }
}
