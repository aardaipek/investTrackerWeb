import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RequestService } from 'src/app/utils/request.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { IActivity } from 'src/app/model/interfaces/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: any[] = []; // Array to store the fetched data
  draftActivity: any = {
    name:"",
    quantity:0,
    price:0,   
  };
  showModal: boolean = false;
  portfolioId: string = "0";
  private sub: any;

  constructor(private route: ActivatedRoute,private location:Location,private requestService: RequestService,private datepipe: DatePipe) { }

  async ngOnInit() {
    this.sub = await this.route.params.subscribe(params => {
      this.portfolioId = params['id'];
   });
  this.activities = await this.requestService.getActivity(this.portfolioId)
   
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  update(item: any): void {
    alert(item._id)
  }

  delete(item: any): void {
    alert(item._id)
  }

  back(): void {
    this.location.back();
  }

  public async saveActivity(): Promise<any> {
    this.draftActivity.purchaseDate = this.datepipe.transform((new Date), 'dd/MM/yyyy');
    this.draftActivity.portfolioId = this.portfolioId;
    this.draftActivity.type = 1;
    await this.requestService.addActivity(this.draftActivity);
  }
}
