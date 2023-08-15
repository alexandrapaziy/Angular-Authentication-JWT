import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  public createWorker(worker: any) {
    return this.http.post(`${baseUrl}/worker/`, worker);
  }
}
