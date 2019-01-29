import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadFile$(title: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, title);
    return this.httpClient.post('http://localhost:3000/files', formData);
  }
}
