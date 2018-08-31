import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 id = '';
   name = '';
  constructor(private routingService: Router, private dataService: DataService, private routing: ActivatedRoute) {
    this.id = this.routing.snapshot.paramMap.get('id');
    this.name = this.routing.snapshot.paramMap.get('name');
    this.dataService.getAllPropertyDetails(this.id, this.name ).subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit() {
  }
  NavigateBack() {
    this.routingService.navigateByUrl('');
  }
}
