import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StatusViewComponent } from './status-view/status-view.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
  {path: 'success', component : StatusViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  