import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestsService } from '../http-requests.service';
import { UserInterface } from '../interface/user.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  users: UserInterface[] = [];

  constructor(private httpService: HttpRequestsService, private router: Router) {}

  ngOnInit(): void {
    this.httpService.fetchUsers().subscribe( data => this.users = data );
  }

  visitUser(user: UserInterface) {
    this.httpService.setUser(user);
    this.router.navigate(['user']);
  }
}
