import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrokerComponent } from './broker/broker.component';
import { CheckBrokerComponent } from './check-broker/check-broker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetamaskComponent } from './metamask/metamask.component';


@NgModule({
  declarations: [
    AppComponent,
    BrokerComponent,
    CheckBrokerComponent,
    MetamaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
