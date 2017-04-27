import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {
  MockGenderData,
  MockOrientationData,
  MockBodyTypeData,
  MockAgeData,
  MockEfectivityData,
  MockRegionData
} from '../mockData/find.data.mock';


@Injectable()
export class FindService {

  constructor() { }

  /**
   * Get list about Gender filters
   * @returns {any[]}
   */
  getGenders() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockGenderData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }

  /**
   * Get list about Orientation filters
   * @returns {any[]}
   */
  getOrientations() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockOrientationData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }

  /**
   * Get list about Body Type filters
   * @returns {any[]}
   */
  getBodyTypes() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockBodyTypeData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }

  /**
   * Get list about Age filters
   * @returns {any[]}
   */
  getAges() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockAgeData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }

  /**
   * Get list about Efectivity filters
   * @returns {any[]}
   */
  getEfectivitys() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockEfectivityData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }

  /**
   * Get list about Region filters
   * @returns {any[]}
   */
  getRegions() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockRegionData)
    });

    let observable = Observable.of(new Response(response));

    return observable.map(data => {
      return data.json();
    });
  }
}
