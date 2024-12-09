import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interfaces/Task.interface';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  //VAR
  private supabaseUrl: string = environment.supabaseUrl;
  private supabaseKey: string = environment.supabaseKey;
  private apiUrl: string = `${this.supabaseUrl}/rest/v1/`;
  private headers: HttpHeaders = new HttpHeaders({
    'apikey': this.supabaseKey,
    'Authorization': `Bearer ${this.supabaseKey}`,
    'Content-Type': 'application/json'
  });


  constructor(private httpClient: HttpClient) { }

  getTasks(){
    return this.httpClient.get(this.apiUrl+"tasks", {headers: this.headers});
  }

  getTaskById(id: string){
    return this.httpClient.get(this.apiUrl+`tasks?id=eq.${id}`, {headers : this.headers});
  }

  addTask(task: Task){
    return this.httpClient.post(this.apiUrl+"tasks", task, {headers: this.headers});
  }

  updateTask(task: Task){
    return this.httpClient.put(this.apiUrl+`tasks?id=eq.${task.id}`, task, {headers: this.headers});
  }

  deleteTask(id: string){
    return this.httpClient.delete(this.apiUrl+`tasks?id=eq.${id}`, {headers: this.headers});
  }

}
