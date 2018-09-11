import { Component, OnInit } from '@angular/core';
import { Backend } from '../backend';

@Component({
  selector: 'app-page-status',
  templateUrl: './page-status.component.html',
  styleUrls: ['./page-status.component.scss']
})
export class PageStatusComponent implements OnInit {

  constructor(private backend: Backend) { }

  ngOnInit() {
  }

}
