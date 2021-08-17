import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicio/user.service';
import {User} from  '../interfaces/user/user.module';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] =[];
  mensaje: any = "";
  constructor(private userService: UserService) { }
  

  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers(){
    try{
      this.mensaje = sessionStorage.getItem('email')
      this.users = await this.userService.getUsers();

    }catch(err){
        console.log(err);
    }    
  }

}
