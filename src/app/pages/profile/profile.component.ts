import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/request.service';
import { IUser } from 'src/app/model/interfaces/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser | null = null; 
  constructor(private readonly requestService:RequestService) { }

  async ngOnInit() {
    const userEmail = await localStorage.getItem('email') || "";
    this.user = await this.requestService.getUser(userEmail);
  }

}
