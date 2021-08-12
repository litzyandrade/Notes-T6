import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { UserService } from './servicio/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  canAccess: boolean = true;
  constructor(private router: Router, private userService:UserService) { }

  canActivate(router: ActivatedRouteSnapshot): boolean|UrlTree{
    if(this.userService.isLogin()===0){
      alert("No tienes acceso porfavor logeate")
      this.router.navigate(["acceso"],{queryParams: {back_url:router.url}})//donde dice login pondras el nombre de la ruta que creaste para login 
      return false
    }
    return true
  }
}
