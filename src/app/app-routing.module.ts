import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DirectorDashboardComponent } from './pages/director/director-dashboard/director-dashboard.component';
import { WorkerDashboardComponent } from './pages/worker/worker-dashboard/worker-dashboard.component';
import { directorGuard } from './services/director.guard';
import { workerGuard } from './services/worker.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'director-dashboard',
    component: DirectorDashboardComponent,
    canActivate: [directorGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ],
  },
  {
    path: 'worker-dashboard',
    component: WorkerDashboardComponent,
    canActivate: [workerGuard],
    children: [

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
