import { AgendaData } from './../../models/agenda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  baseURL = 'http://localhost:8080/agenda'

  constructor(private http : HttpClient) { }

  //CRUD operations
  //Get
  getAllNotes () {
    return this.http.get<Array<AgendaData>>(this.baseURL+ "/")
  }
  //Get
  getNote(id : number) {
    return this.http.get<AgendaData>(this.baseURL + "/" + id)
  }
  //Post
  addNote = (data: AgendaData) => {
    return this.http.post<AgendaData>(this.baseURL + "/", {
      "date":data.date,
      "note":data.note
    });
  };
  //Put
  editNote = (data: AgendaData) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "date":data.date,
      "note":data.note
    });
  };
  //Delete
  deleteNote(id : number){
    return this.http.delete(this.baseURL + "/" + id)
  }
}
