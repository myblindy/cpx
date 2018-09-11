import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../backend';

@Component({
  selector: 'app-item-status',
  templateUrl: './item-status.component.html',
  styleUrls: ['./item-status.component.scss']
})
export class ItemStatusComponent implements OnInit {

  @Input() public status: Status;

  constructor() { }

  ngOnInit() {
  }

}
