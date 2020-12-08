import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import {Post} from 'src/app/app.component';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{
    title = '';
    text = '';

// tslint:disable-next-line: no-output-on-prefix
@Output() onAdd = new EventEmitter<Post>();
@ViewChild('titleInput') inputRef: ElementRef;
    // tslint:disable-next-line: typedef
    addPost(){
      if (this.text.trim() && this.title.trim()){
        const post: Post = {
          title: this.title,
          text: this.text,
        };
        this.onAdd.emit(post);
        console.log('New post-----', post);
        this.title = this.text = '';
        this.inputRef.nativeElement.focus();

      }
    }
}
