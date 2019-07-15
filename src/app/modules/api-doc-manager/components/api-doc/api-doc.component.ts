import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import apiUpload from '../../../../models/apiUpload'

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css']
})
export class ApiDocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() apiUpload: apiUpload;
  @Output() sendEvent = new EventEmitter();

  deleteApi(id: number) {
    this.sendEvent.emit(["delete", id])
  }

  updateApi(id: number, path: string, api: string) {

  }
}
