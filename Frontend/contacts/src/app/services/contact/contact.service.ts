import { ContactData } from './../../models/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseURL = 'http://localhost:8080/contact/'

  constructor(private http : HttpClient) { }

  //CRUD operations
  //Get
  getAllContacts () {
    return this.http.get<Array<ContactData>>(this.baseURL)
  }
  //Get
  getContact(id : number) {
    return this.http.get<ContactData>(this.baseURL + "/" + id)
  }
  //Post
  addContact = (data: ContactData) => {
    return this.http.post<ContactData>(this.baseURL, {
      "firstname":data.firstName,
      "lastName":data.lastName,
      "phone":data.phone,
      "email":data.email,
      "company":data.company
    });
  };
  //Put
  editContact = (data: ContactData) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "id": data.id,
      "firstname":data.firstName,
      "lastName":data.lastName,
      "phone":data.phone,
      "email":data.email,
      "company":data.company
    });
  };
  //Delete
  deleteContact(id : number){
    return this.http.delete(this.baseURL + "/" + id)
  }

}
