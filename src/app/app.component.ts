import { Component } from '@angular/core';
import {Post} from './shared/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon super site';

  posts = [
      new Post(
          'Mon premier post',
          'Lorem ipsum dolor sit amet, duis omnis malesuada felis. Ut leo, nulla in dui, commodo elit massa metus non voluptate fusce. Praesent ipsum leo mi lectus magnis auctor, nam consequat quis sapien ut diam, aliquam cras. Vulputate amet vestibulum, adipiscing in egestas in habitasse aspernatur dui',
          +1
      ),
      new Post(
          'Mon deuxieme post',
          'Nulla a integer nibh, porta orci, convallis ac sint montes odio urna, ut nec vehicula pellentesque et, gravida felis purus dolor varius. Fermentum senectus nec velit libero vulputate, et iste. Justo et sint laoreet lacinia luctus, cras mauris duis mollis, dolor dui imperdiet',
          -1
      ),
      new Post(
          'Encore un post',
          'psum suspendisse porta ullamcorper vulputate pede. Et sodales accumsan consectetuer, pede etiam felis, ornare maecenas ipsum vitae amet. Vestibulum pellentesque, lorem varius, penatibus'
      )
  ];

}
