import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestsService } from '../http-requests.service';
import { PostInterface } from '../interface/post.interface';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts: PostInterface[] = [];

  constructor(private httpService: HttpRequestsService, private router: Router) { }

  ngOnInit(): void {
    const getPosts = this.httpService.getPosts()
    if(getPosts === undefined) {
      this.router.navigate(['/']);
    } else {
      getPosts.subscribe(data => this.posts = data);
    }
  }

}
