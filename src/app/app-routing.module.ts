import { CheckBrokerComponent } from './check-broker/check-broker.component';
import { BrokerComponent } from './broker/broker.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"broker",
    component : BrokerComponent
  },
  {
    path:"add_broker",
    component:CheckBrokerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
