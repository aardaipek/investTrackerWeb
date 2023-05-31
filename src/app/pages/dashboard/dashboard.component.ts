import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/request.service';
import { IUser } from 'src/app/model/interfaces/user';
import { IDashboard } from 'src/app/model/interfaces/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboards: IDashboard[] = [];
  user: IUser | null = null; 
  constructor(private requestService:RequestService) { }

  async ngOnInit() {
    this.user = await this.requestService.getUser('developer.ardaipek@gmail.com');
    if(this.user && this.user._id){
      this.dashboards = await this.requestService.getDashboard(this.user._id);
    }
  }


}
