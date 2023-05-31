import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ActivityComponent } from './pages/activity/activity.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'user', component: ProfileComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'dashboard/:id/portfolio/:id', component: ActivityComponent },
  { path: 'dashboard/:id/portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
