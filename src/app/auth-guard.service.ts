import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  Acceso: boolean = true;
  constructor(private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree{
    if(!this.Acceso){
      alert("No tienes acceso porfavor logeate")
      this.router.navigate([""],{queryParams: {back_url:router.url}})//donde dice login pondras el nombre de la ruta que creaste para login 
      return false
    }
    return true
  }
}
