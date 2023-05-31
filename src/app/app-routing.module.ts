import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { PortfolioDetailComponent } from './pages/portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'user', component: ProfileComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'dashboard/:dashboardId/portfolio/:portfolioId', component: PortfolioDetailComponent },
  { path: 'dashboard/:id/portfolio/:id/activities', component: ActivityComponent },
  { path: 'dashboard/:id/portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
