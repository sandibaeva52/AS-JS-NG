import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PostComponent} from './components/post/post.component';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
