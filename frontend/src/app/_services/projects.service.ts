import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from '../model-classes/project';
import { map } from "rxjs/operators";
import { environment as env } from '../../environments/environment';
//import { environment as env } from "envi";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  insert(data): Observable<boolean> {
    return this.http.post<any>(`${env.apiUrl}/projects`, data);
  }

  getAll(): Observable<Project[]> {
    return this.http.get<any>(`${env.apiUrl}/projects`)
      .pipe(map(result => {
        console.log(result.msg);
        return result;
      }));
  }

  get(id): Observable<Project[]> {
    return this.http.get<any>(`${env.apiUrl}/projects/` + id);
  }

  delete(id){
    return this.http.delete<any>(`${env.apiUrl}/projects/` + id);
  }

  getRoles(){
    return this.http.get<any>(`${env.apiUrl}/roles`);
  }

  getUsersFromProject(id){
    return this.http.get<any>(`${env.apiUrl}/projects/list/` + id);
  }

  insertComplete(data){
      return this.http.post<any>(`${env.apiUrl}/projects/createmass`, data);
  }


}
