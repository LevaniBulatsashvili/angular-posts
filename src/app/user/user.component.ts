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
  details: string = 'Show Details';

  constructor(private httpService: HttpRequestsService, private router: Router) { }

  ngOnInit(): void {
    // gets the selected user from httpRequestsService
    this.user = this.httpService.getUser();
  }

  visitPosts(user: UserInterface) {
    // navigates to posts page and fetches the posts inside HttpRequestsService
    this.httpService.fetchPosts(user);
    this.router.navigate(['posts']);
  }

  showDetails() {
    // reveals extra information about the user
    this.fullDetails = !this.fullDetails;
    this.details === 'Show Details'? this.details = 'Hide Details' : this.details = 'Show Details';
  }
}
