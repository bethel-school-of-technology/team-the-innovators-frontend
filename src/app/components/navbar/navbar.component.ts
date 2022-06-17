import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private UserService: UserService, private Router: Router) { }

  ngOnInit(): void {
    this.UserService.logoutUser().subscribe(() => {
      console.log('logout');
    });
  }

  logout() {
    this.UserService.logoutUser().subscribe(() => {
      localStorage.removeItem('hotspotsAppToken')
      console.log('logout');
      this.Router.navigate(['/login']);
    });
  }
  

}
