import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now: Date = new Date();
  search = '';
  // toggle;
  posts: Post[] = [
    {title: 'Learn English', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, non! Dicta officiis illum itaque sit? Numquam labore veritatis nemo officiis facilis voluptatem praesentium natus tempora. Quos magnam qui repellendus dolores.', id: 1},
    {title: 'Learn Angular', text: 'Lorem', id: 2},
  ];

  // tslint:disable-next-line: typedef
  updatePosts(post: Post){
    this.posts.unshift(post);
  }
  // tslint:disable-next-line: typedef
  removePost(id: number){
    console.log(id);
    this.posts = this.posts.filter(
      p => p.id !== id
    );
  }
}
