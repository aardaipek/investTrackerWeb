import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/utils/request.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  activities: any[] = [];
  averagePrices: any = [];
  portfolioId: string = "0";
  dashboardId: string = "0";
  private sub: any;

  constructor(private requestService: RequestService,private location:Location, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.sub = await this.route.params.subscribe(params => {
      this.portfolioId = params['portfolioId'];
      this.dashboardId = params['dashboardId'];
   });
    this.activities = await this.requestService.getAllActivities(this.portfolioId);
    this.calculate(this.activities);
  }

  async ngOnDestroy() {
    this.sub.unsubscribe();
  }

  calculate(activities:any){
    for (const activity of activities) {
      const { name, price, quantity } = activity;
      
      const existingActivity = this.averagePrices.find((x:any) => x.name === name);
      if (!existingActivity) {
        this.averagePrices.push({
          name,
          accumulatedPrice: price * quantity,
          accumulatedQuantity: quantity,
          averagePrice: price
        });
      } else {
        existingActivity.accumulatedPrice += price * quantity;
        existingActivity.accumulatedQuantity += quantity;
        existingActivity.averagePrice = existingActivity.accumulatedPrice / existingActivity.accumulatedQuantity;
      }
    }    
  }

  back(): void {
    this.location.back();
  }

}
