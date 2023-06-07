import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/request.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private readonly requestService: RequestService, private readonly router:Router) { }

  async ngOnInit() {
  }

  public async login(): Promise<any> {
    const result = await this.requestService.login({email: this.email, password: this.password});
    localStorage.setItem('accessToken', result.token);
    this.router.navigate(['dashboard']);
  }

}
