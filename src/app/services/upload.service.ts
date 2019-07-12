import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  
  constructor(private http: HttpClient) { }

  postFile(file: File, api:string): Observable<Object> {
    const dest = 'http://localhost:8080/upload';
    const formData: FormData = new FormData();
    const httpOpts = {
      headers: new HttpHeaders()
    }

    formData.append(api, file, file.name);

    return this.http.post(dest, formData, httpOpts);
  }
}
