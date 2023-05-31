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

  saveItem(){}

  // saveItem(): void {
  //   console.log('Saving item:', this.editedItem);
  //   const { name, price, quantity } = this.editedItem;

  //   const body = {
  //     name: name,
  //     type: 1,
  //     portfolioId:'647654395b96793b069070c4',
  //     purchaseDate:this.datepipe.transform((new Date), 'dd/MM/yyyy'),
  //     quantity:quantity,
  //     price:price
  // }
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   this.http.post<any[]>('http://localhost:3000/api/activity/create', body, { headers }).subscribe(
  //     (data: any[]) => {
  //       this.activities = data;
  //     },
  //     (error) => {
  //       console.log('Error fetching data:', error);
  //     }
  //   );
  // }


}
