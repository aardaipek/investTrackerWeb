import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../model/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  async getUser(email:string): Promise<any> {
    try {
      const body = { email: email };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const response = await this.http.post('http://localhost:3000/api/user/getUser', body, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Error occurred while sending request:', error);
      throw error;
    }
  }

  async getDashboard(userId:string): Promise<any> {
    try {
      const body = { userId: userId };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const response = await this.http.post('http://localhost:3000/api/dashboard/getDashboard', body, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Error occurred while sending request:', error);
      throw error;
    }
  }

  async getActivity(portfolioId:string): Promise<any> {
    try {
      const body = { portfolioId: portfolioId };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const response = await this.http.post('http://localhost:3000/api/activity/getAllActivity', body, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Error occurred while sending request:', error);
      throw error;
    }
  }

  async getAllPortfolio(dashboardId:string): Promise<any> {
    try {
      const body = { dashboardId: dashboardId };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const response = await this.http.post('http://localhost:3000/api/portfolio/getAllPortfolio', body, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Error occurred while sending request:', error);
      throw error;
    }
  }
}
