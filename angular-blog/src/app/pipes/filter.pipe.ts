import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()){
      return posts;
    }
    return posts.filter(
      post => post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

}
