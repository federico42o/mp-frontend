import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StatusViewComponent } from './status-view/status-view.component';
const routes: Routes = [
  {path: '', redirectTo: 'checkout', pathMatch: 'full'},
  {path: 'checkout', component: CheckoutComponent },
  {path: 'checkout/:status', component : StatusViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  