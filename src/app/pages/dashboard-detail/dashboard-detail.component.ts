import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/utils/request.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {
  dashboardId: string = "0";
  dashboard: any = {};
  private sub: any;

  constructor(private route: ActivatedRoute,private requestService: RequestService) { }

  async ngOnInit() {
    this.sub = await this.route.params.subscribe(params => {
      this.dashboardId = params['id'];
   });
    this.dashboard = await this.requestService.getDashboard(this.dashboardId);
  }

}
