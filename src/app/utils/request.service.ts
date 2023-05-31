import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  private async sender(body:any, url:string): Promise<any> {
    try {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const response = await this.http.post(url, body, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Error occurred while sending request:', error);
      throw error;
    }
  }

  public async getUser(email: string): Promise<any> {
    const body = { email };
    const response = await this.sender(body,'http://localhost:3000/api/user/getUser');
    return response;
  }

  public async getUserDashboards(userId: string): Promise<any> {
    const body = { userId };
    const response = await this.sender(body,'http://localhost:3000/api/dashboard/getUserDashboards');
    return response;
  }

  public async getDashboard(dashboardId: string): Promise<any> {
    const body = { dashboardId };
    const response = await this.sender(body,'http://localhost:3000/api/dashboard/getDashboard');
    return response;
  }

  public async getAllActivities(portfolioId: string): Promise<any> {
    const body = { portfolioId };
    const response = await this.sender(body,'http://localhost:3000/api/activity/getAllActivity');
    return response;
  }

  public async getAllPortfolio(dashboardId: string): Promise<any> {
    const body = { dashboardId };
    const response = await this.sender(body,'http://localhost:3000/api/portfolio/getAllPortfolio');
    return response;
  }

  public async addActivity(data: any): Promise<any> {
    const response = await this.sender(data,'http://localhost:3000/api/activity/create');
    return response;
  }
}
