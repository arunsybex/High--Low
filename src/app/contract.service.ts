import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let _contract = require('./HL.json');

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  public _account: string = null;
  public _web3: any;

  public _tokenContractAddress: string = "0xc18cb67daef73e39d7436a90a8a42e775f76a801";

  public contract: any;

  constructor() { 
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);
      this.contract = this._web3.eth.contract(_contract).at(this._tokenContractAddress);
    }
}

  public async getAccount(): Promise<string>{
      
    if (this._account == null) {
      let meta = this;
      meta._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
  
    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._web3.eth.getBalance(account,function(err,result){
          if(err != null) {
            reject(err);
          }
          resolve(_web3.fromWei(result));
      })
    }) as Promise<number>;
  }

  public async check_broker(): Promise<boolean>{
    let account = await this.getAccount();
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this.contract.broker_map.call(account,function(err,result){
        if(err != null) {
          reject(err);
        }
        
        resolve(result[2]);
      })
    })as Promise<boolean>;

  }

  public async add_broker(amount): Promise<boolean>{
    let account = await this.getAccount();
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this.contract.add_broker({from:account,value:this._web3.toWei(amount,'ether'),gas: 600000},function(err,result){
        if(err != null) {
          reject(err);
        }
        resolve(result);
      })
    })as Promise<boolean>;

  }
  
  public async get_total_game(): Promise<number[]> {
    let account = await this.getAccount();
    return new Promise((resolve, reject) => {
      this.contract.game_id.call(function (error,result) {
        if(error){    
          reject(error); 
        } 
          // setTimeout(() => {
          //   console.log("Async Work Complete");
          //   resolve(result.toNumber());
          // }, 1000);
          const arr:number[] = [];
          for(var i=1;i<= result.toNumber();i++){
              arr.push(i);
          }
          resolve(arr);
        
      });
    })as Promise<number[]>;
  }

  public async length_of_game_set_map(gid):Promise<number>{
    return new Promise((resolve, reject) => {
      this.contract.length_of_game_set_map.call(gid,function (error,result) {
        if(error){    
          reject(error); 
        } 

        resolve(result.toNumber());
      });
    })as Promise<number>;
  }

  public async game_set_map(gid):Promise<object>{
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this.contract.game_set_map.call(gid,function (error,result) {
        if(error){    
          reject(error); 
        } 
        result[0] = _web3.toAscii(result[0])
        resolve(result);
      });
    })as Promise<object>;
  }

}
