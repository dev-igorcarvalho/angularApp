import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import { Local } from 'src/app/models/local';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private dataSource: DataSourceService) {}

  showMap:boolean;

  ngOnInit() {
    this.showMap = false;
    this.results = this.dataSource.localDataSource;
  }

  results: Local[] ;

  exibirMapa(){
    this.showMap = !this.showMap;
  }
}
