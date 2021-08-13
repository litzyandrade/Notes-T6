import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { UserService } from '../servicio/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users : User[]=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
mostrarNotas(){
  console.log("notaaaa")
}
  async getUsers(){
    try{
      
      this.users = await this.userService.getUsers();

    }catch(err){
        console.log(err);
    }    
  }
}
