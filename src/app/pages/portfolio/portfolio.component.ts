import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/utils/request.service';
import { IPortfolio } from 'src/app/model/interfaces/portfolio';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolios:IPortfolio[] = [];
  dashboardId: string = "0";
  private sub: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.sub = await this.route.params.subscribe(params => {
      this.dashboardId = params['id'];
   });
    this.portfolios = await this.requestService.getAllPortfolio(this.dashboardId);
  }



}
