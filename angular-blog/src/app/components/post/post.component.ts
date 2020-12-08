import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  @Input() myPost: Post;

  @ContentChild('info', {static: true}) infoRef: ElementRef;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();
  // tslint:disable-next-line: typedef
  ngOnchanges(changes: SimpleChanges){
    console.log('ngOnChanges-------', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit---------');
  }
 
  ngOnDestroy() {
    console.log('ngOnDestroy---------');
  }
  // tslint:disable-next-line: typedef
  remove(){
    this.onRemove.emit(this.myPost.id);
  }
  // constructor() { }
  // ngOnInit(): void {
  //   console.log('----->', this.myPost);
  // }

}
