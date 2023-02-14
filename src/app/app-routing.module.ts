import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { StatusViewComponent } from './status-view/status-view.component';
const routes: Routes = [
  {path : '', component: HomeComponent},
  { path: 'checkout', component: CheckoutComponent },
  {path: 'checkout/:status', component : StatusViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  