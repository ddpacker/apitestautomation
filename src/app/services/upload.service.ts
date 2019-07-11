import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  constructor(private http: HttpClient) { }
  
  post(fileToUpload: File): Observable<boolean> {
    const dest = 'localhost:8080/upload';
    const formData: FormData = new FormData();
    console.log(this.http)
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return(this.http
      .post(dest, formData, { headers: null })
      .pipe(map(data => { return true;}), catchError(e => of(this.handleError(e))))
      )
  }
  handleError(e) {
    console.log("Oops! " + e.status)
    return false;
  }

}
