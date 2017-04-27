import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {
  MockTrendingData
} from '../mockData/tags.data.mock';

@Injectable()
export class TagsService {

  constructor() { }

  /**
   * Get list treanding
   * @returns {any[]}
   */
  getTreanding() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockTrendingData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }

}
