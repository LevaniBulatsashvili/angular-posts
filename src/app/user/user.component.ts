import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestsService } from '../http-requests.service';
import { UserInterface } from '../interface/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: UserInterface;
  fullDetails: boolean = false;

  constructor(private httpService: HttpRequestsService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.httpService.getUser();
    console.log(this.user);
  }

  visitPosts(user: UserInterface) {
    this.httpService.fetchPosts(user);
    this.router.navigate(['posts']);
  }

  showDetails() {
    this.fullDetails = !this.fullDetails;
  }
}
