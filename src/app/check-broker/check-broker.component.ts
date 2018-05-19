import { ContractService } from './../contract.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-broker',
  templateUrl: './check-broker.component.html',
  styleUrls: ['./check-broker.component.css']
})
export class CheckBrokerComponent implements OnInit {

  constructor(private service:ContractService) {}

  ngOnInit() {
  }

  regbroker(e){
    if (e["amount"] != null){
      this.service.add_broker(parseFloat(e["amount"])).then(TXhas => console.log(TXhas));
    }
    else{
        alert("Check amount");
    }
  }
}
