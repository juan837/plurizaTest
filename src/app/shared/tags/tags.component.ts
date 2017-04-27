import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: Array<any>;
  @Input() collapsed: boolean;
  @Input() title: string = '';

  public isCollapsed:boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.tags);
    console.log('Colapse ', this.collapsed);
    this.isCollapsed = this.collapsed;
  }



  public collapsed_function(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

}
