import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {

  @Input("isActive") isLiked: boolean;
  @Input("likesCount") likesCount: number

  like() {
    if (this.isLiked) this.likesCount--;
    else this.likesCount++;

    this.isLiked = !this.isLiked
  }
}
