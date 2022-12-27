import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('title')title: string = "";
  @Input('note')notes: string=''
  isExpended:boolean = false


  toggle(){
    this.isExpended = !this.isExpended
  }
}
