import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private readonly router:Router, private readonly authService: AuthService) { }

  async ngOnInit() {
  }

  public async login(): Promise<any> {
    const result = await this.authService.login(this.email,this.password);
    this.router.navigate(['dashboard']);
  }

}
