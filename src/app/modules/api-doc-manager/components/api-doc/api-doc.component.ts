import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import apiUpload from '../../../../models/apiUpload'
import { UploadService } from '../../../../services/upload.service'

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css']
})
export class ApiDocComponent implements OnInit {

  @Input() apiUpload: apiUpload;
  @Output() sendEvent = new EventEmitter();

  fileToUpload: File = null;
  
  constructor(
    private uploadService: UploadService
  ) { }

  handleUpload(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    this.uploadService.post(this.fileToUpload).subscribe(data => {
      console.log("Success!")
    }, error => {
      console.log(error);
    });
  }

  addApi(path: string, api: string) {
    this.uploadFile();
    const newApi = new apiUpload(null, path, api);
    this.sendEvent.emit(["add", newApi])
  }

  deleteApi(id: number) {
    this.sendEvent.emit(["delete", id])
  }

  updateApi(id: number, path: string, api: string) {

  }



  ngOnInit() {
  }

}
