import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class BrokerGuard implements CanActivate {
  constructor(private service:ContractService,private router:Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.service.check_broker().then(broker => {
        if (!broker){
          this.router.navigate(["add_broker"]);
          return false;
        }
        else{
          return true;
        }
      })
  }
}
