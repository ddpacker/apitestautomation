import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import apiUpload from '../../../../models/apiUpload'
import { UploadService } from '../../../../services/upload.service'

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css']
})
export class ApiDocComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  @Input() apiUpload: apiUpload;
  @Output() sendEvent = new EventEmitter();

  fileToUpload: File;

  handleUpload(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile(api) {
    this.uploadService.postFile(this.fileToUpload, api).subscribe(file => {
      console.log(file);
    });
  }

  addApi(path: string, api: string) {
    this.uploadFile(api);
    const newApi = new apiUpload(null, path, api);
    this.sendEvent.emit(["add", newApi])
  }

  deleteApi(id: number) {
    this.sendEvent.emit(["delete", id])
  }

  updateApi(id: number, path: string, api: string) {

  }
}
