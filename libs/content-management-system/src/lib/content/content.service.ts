import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { footerNavResponse } from './content.mocks';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentService {
  constructor(private http: HttpClient) {}

  getContent(endpoint: string): Observable<any> {
    return of(footerNavResponse);
  }
}
