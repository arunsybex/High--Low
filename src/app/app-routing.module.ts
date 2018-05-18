import { CheckBrokerComponent } from './check-broker/check-broker.component';
import { BrokerComponent } from './broker/broker.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokerGuard } from './broker.guard';
import { MetamaskComponent } from './metamask/metamask.component';
import { MetamaskGuard } from './metamask.guard';

const routes: Routes = [
  {
    path:"broker",
    component : BrokerComponent,
    canActivate : [BrokerGuard]
  },
  {
    path:"add_broker",
    component:CheckBrokerComponent,
    canActivate : [!BrokerGuard]
  },
  {
    path:"metamask",
    component:MetamaskComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
