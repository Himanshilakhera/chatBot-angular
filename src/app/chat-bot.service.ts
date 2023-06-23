import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor(public http: HttpClient) { }

  post(url:any , data:any){
    return this.http.post(url,data);
  }
}
