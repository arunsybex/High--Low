import { RouterModule, Router } from '@angular/router';
import { ContractService } from './../contract.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {
  games: number;
  address : string = null;
  balance : number = null;
  amount : number = null;
  total_game = [];


  constructor(private service:ContractService,private router:Router) {
    // service.check_broker().then(broker => {
    //   if (!broker){
    //     router.navigate(["add_broker"]);
    //   }
    // })
   }


  ngOnInit() {
    this.service.getAccount().then(address => this.address = address)
    this.service.getUserBalance().then(balance => this.balance = balance)
    this.service.get_total_game().then(game =>{
      game.forEach(item => {
        this.service.game_set_map(item).then(obj => {
          console.log(obj);

          var name=obj[0];
          var s = '';
          for (var k= 0; k < name.length; k += 2)
          {
            s+= String.fromCharCode(parseInt(name.substr(k, 2), 16));
          }
          
          this.total_game.push({"broker_name":s})
        });
      });
    })
  }
}
