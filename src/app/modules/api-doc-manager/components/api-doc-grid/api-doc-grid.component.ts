import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-api-doc-grid',
  templateUrl: './api-doc-grid.component.html',
  styleUrls: ['./api-doc-grid.component.css']
})
export class ApiDocGridComponent implements OnInit {

  apiUploads = [];

  handleEvent(e) {
    if(e[0]=="add") {
      this.addNewDoc(e[1])
    } else if (e[0]=="delete") {
      this.deleteDoc(e[1])
    } else if (e[0]=="update") {
      this.editDoc(e[1])
    }

  }
  addNewDoc(e) {
    e.id=(this.apiUploads.length+1)
    this.apiUploads.push(e)
  }

  deleteDoc(e) {
    var index = this.apiUploads.map(x => {
      return x.id;
    }).indexOf(e);
    this.apiUploads.splice(index, 1);
    for (var i in this.apiUploads) {
      this.apiUploads[i].updateId(+i+1);
    }
  }

  editDoc(e) {

  }

  constructor() { }

  ngOnInit() {

  }

}
