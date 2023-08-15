import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public getCurrentWorker() {
    return this.http.get(`${baseUrl}/current-worker`);
  }

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  public loginWorker(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token')
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('worker');
    return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setWorker(worker: any) {
    localStorage.setItem('worker', JSON.stringify(worker));
  }

  public getWorker() {
    let workerStr = localStorage.getItem('worker');
    if (workerStr != null) {
      return JSON.parse(workerStr);
    } else {
      this.logout;
      return null;
    }
  }

  public getWorkerPosition() {
    let worker = this.getWorker();
    return worker.authorities[0].authority;
  }
}
