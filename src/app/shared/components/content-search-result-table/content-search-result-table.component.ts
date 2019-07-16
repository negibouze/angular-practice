import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-content-search-result-table',
  templateUrl: './content-search-result-table.component.html',
  styleUrls: ['./content-search-result-table.component.styl']
})
export class ContentSearchResultTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[];
  @Input() data: any[];

  dataSource = new MatTableDataSource<any>();
  paginator: MatPaginator;
  sort: MatSort;

  @ViewChild(MatPaginator, { static: false }) set matPaginator(
    mp: MatPaginator
  ) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.data;
    this.dataSource.data = data.currentValue;
  }

  hasData(): boolean {
    if (!this.dataSource || !this.dataSource.data) return false;
    return 1 <= this.dataSource.data.length;
  }

  setDataSourceAttributes() {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
