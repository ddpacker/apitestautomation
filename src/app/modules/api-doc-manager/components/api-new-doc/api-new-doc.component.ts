import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import apiUpload from '../../../../models/apiUpload'
import { UploadService } from '../../../../services/upload.service'

@Component({
  selector: 'app-api-new-doc',
  templateUrl: './api-new-doc.component.html',
  styleUrls: ['./api-new-doc.component.css']
})
export class ApiNewDocComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }
  
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

}
