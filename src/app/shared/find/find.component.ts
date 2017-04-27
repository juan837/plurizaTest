import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';

import { FindService } from '../services/find.service';

//import { SelectComponent } from 'ng2-select-compat';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html'
})
export class FindComponent implements OnInit {

  //@ViewChild(SelectComponent) ngGender: SelectComponent;
  //@ViewChild('ngGender') public ngGender: SelectComponent;

  private valueGender:any = {};
  private valueOrientation:any = {};
  private valueBodyType:any = {};
  private valueAge:any = {};
  private valueEfectivity:any = {};
  private valueRegion:any = {};
  //private _disabledV:string = '0';
  //private disabled:boolean = false;
  //MockGenderData,
  //MockOrientationData,
  //MockBodyTypeData,
  //MockAgeData,
  //MockEfectivityData,
  //MockRegionData
  private itemsGender: Array<any> = [];
  private itemsOrientation: Array<any> = [];
  private itemsBodyType: Array<any> = [];
  private itemsAge: Array<any> = [];
  private itemsEfectivity: Array<any> = [];
  private itemsRegion: Array<any> = [];


  constructor(private findService: FindService) { }

  ngOnInit() {
    // load Gender Select
    this.findService.getGenders().subscribe(result => {
      this.itemsGender = result;
    });

    // load Orientation Select
    this.findService.getOrientations().subscribe(result => {
      this.itemsOrientation = result;
    });

    // load Body Type Select
    this.findService.getBodyTypes().subscribe(result => {
      this.itemsBodyType = result;
    });

    // load Age Select
    this.findService.getAges().subscribe(result => {
      this.itemsAge = result;
    });

    // load Efectivity Select
    this.findService.getEfectivitys().subscribe(result => {
      this.itemsEfectivity = result;
    });

    // load Efectivity Select
    this.findService.getRegions().subscribe(result => {
      this.itemsRegion = result;
    });
  }


  //private get disabledV():string {
  //  return this._disabledV;
  //}
  //
  //private set disabledV(value:string) {
  //  this._disabledV = value;
  //  this.disabled = this._disabledV === '1';
  //}

  public selectedGender(value:any):void {
    this.valueGender = value;
    console.log('Selected value is: ',this.valueGender.id);
  }

  public selectedOrientation(value:any):void {
    this.valueOrientation = value;
    console.log('Selected value is: ',this.valueOrientation.id);
  }

  public selectedBodyType(value:any):void {
    this.valueBodyType = value;
    console.log('Selected value is: ',this.valueBodyType.id);
  }

  public selectedAge(value:any):void {
    this.valueAge = value;
    console.log('Selected value is: ',this.valueAge.id);
  }

  public selectedEfectivity(value:any):void {
    this.valueEfectivity = value;
    console.log('Selected value is: ',this.valueEfectivity.id);
  }

  public selectedRegion(value:any):void {
    this.valueRegion = value;
    console.log('Selected value is: ',this.valueRegion.id);
  }

  public clearFilters(value:any) {
    value.preventDefault();
    //console.log(this.ngGender.removed());

    this.valueGender = {};
    console.log(this.valueGender);
  }


}
