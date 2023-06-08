import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedInEmail: string = "";
  constructor(private readonly authService: AuthService, private readonly router:Router) { 
    this.authService.loggedInemail.subscribe(
      (email) => (this.loggedInEmail = email)
    );
  }

  async ngOnInit() {
  }

  async logout() {
    const result = await this.authService.logout();
    this.router.navigate(['login']);
  }

}
