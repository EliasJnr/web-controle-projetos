import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:7000/api/projeto/projects';

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(project: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, project);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProjectList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
