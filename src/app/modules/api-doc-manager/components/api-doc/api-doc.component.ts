import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import apiUpload from '../../../../models/apiUpload'

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css']
})
export class ApiDocComponent implements OnInit {

  @Input() apiUpload: apiUpload;
  @Output() sendEvent = new EventEmitter();

  addApi(path: string, api: string) {
    const newApi = new apiUpload(null, path, api);
    this.sendEvent.emit(["add", newApi])
  }

  deleteApi(id: number) {
    this.sendEvent.emit(["delete", id])
  }

  updateApi(id: number, path: string, api: string) {

  }

  constructor() { }

  ngOnInit() {
  }

}
