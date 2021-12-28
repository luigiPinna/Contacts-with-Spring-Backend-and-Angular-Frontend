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
  addNote = (note: AgendaData) => {
    return this.http.post<AgendaData>(this.baseURL + "/", {
      "date":note.date,
      "note":note.note
    });
  };
  //Put
  editNote = (note: AgendaData) => {
    return this.http.put(this.baseURL + '/' + note.id, {
      "date":note.date,
      "note":note.note
    });
  };
  //Delete
  deleteNote(id : number){
    return this.http.delete(this.baseURL + "/" + id)
  }

}
