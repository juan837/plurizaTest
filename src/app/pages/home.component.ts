import { Component, OnInit } from '@angular/core';

import { TagsService } from '../shared/services/tags.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  public tagsTreading: Array<any> = [];

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    // load Gender Select
    this.tagsService.getTreanding().subscribe(result => {
      this.tagsTreading = result;
      console.log(this.tagsTreading);
    });
  }
}
