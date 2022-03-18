import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserInterface } from './interface/user.interface';
import { PostInterface } from './interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  private user!: UserInterface;
  private posts!: Observable<PostInterface[]>;

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<UserInterface[]> {
    // fetches users from the server
    return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
  }

  setUser(user: UserInterface) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  fetchPosts(user: UserInterface) {
    // fetches posts from the server
    this.posts = this.http.get<PostInterface[]>(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
  }

  getPosts() {
    return this.posts;
  }
}
