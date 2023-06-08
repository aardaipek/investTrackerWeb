import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RequestService } from 'src/app/utils/request.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private email = new BehaviorSubject<string>('');

  constructor(private readonly requestService: RequestService) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get loggedInemail() {
    return this.email.asObservable();
  }

  async login(email:string, password:string) {
    const result = await this.requestService.login({email: email, password: password});
    localStorage.setItem('accessToken', result.token);
    this.loggedIn.next(true);
    this.email.next(email);
    return true
  }

  async logout() {
    localStorage.removeItem('accessToken');
    this.loggedIn.next(false);
    this.email.next('');
    return true
  }
}
