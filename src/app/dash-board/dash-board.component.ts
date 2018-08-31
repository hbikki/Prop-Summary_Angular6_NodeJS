import { Component , OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  myControl = new FormControl();
  filteredProperties: Observable<any[]>;
  finalProperties = [];
  Properties = [];
  constructor( private dataservice: DataService, private routingService: Router ) {
    this.getPropertiesList();
  }
  setDataValue(value) {
    this.routingService.navigate(['/details', value]);
  }

  ngOnInit() {
    this.filteredProperties = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    this.finalProperties = this.Properties.filter(option => option.name.toLowerCase().includes(filterValue));
    return this.finalProperties;

  }

  getPropertiesList() {

    this.dataservice.getProperties().subscribe(data => {
      this.Properties = data.map(property => {
        return property;
      });
    });
  }

}
