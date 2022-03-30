import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {    
    path: 'home', component: HomeComponent
  },
  {    
    path: 'products', component: ProductsComponent
  },
  {    
    path: 'check-out', component: CheckOutComponent
  },
  {    
    path: 'contact', component: ContactComponent
  },
  {    
    path: 'login', component: LoginComponent
  },
  {    
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
