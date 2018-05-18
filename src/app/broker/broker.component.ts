import { RouterModule, Router } from '@angular/router';
import { ContractService } from './../contract.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {
  address : string = null;
  balance : number = null;
  amount : number = null;


  constructor(private service:ContractService,private router:Router) {
    service.check_broker().then(broker => {
      if (!broker){
        router.navigate(["add_broker"]);
      }
    })
   }


  ngOnInit() {
    this.service.getAccount().then(address => this.address = address)
    this.service.getUserBalance().then(balance => this.balance = balance)
  }
}
