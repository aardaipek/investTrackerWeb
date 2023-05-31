import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RequestService } from 'src/app/utils/request.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: any[] = []; // Array to store the fetched data
  editedItem: any = {
    name:"Test",
    quantity:0,
    price:0
  };
  showModal: boolean = false;
  portfolioId: string = "0";
  private sub: any;

  constructor(private route: ActivatedRoute,private requestService: RequestService,private datepipe: DatePipe) { }

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

  saveItem(): void {}
}
