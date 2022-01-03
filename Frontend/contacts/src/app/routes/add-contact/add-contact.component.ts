import { ContactService } from './../../services/contact/contact.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactData } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private router : Router, private contactService : ContactService) { }


  ngOnInit(): void {
  }

  newContact : ContactData;

  url:"../assets/luigi.png";



  //Invia i dati al backend per aggiungere il contatto
  onSubmit(form : NgForm){
    this.newContact = form.form.value;
    this.newContact.imgURL = "../assets/profilePictures/1.png";
    console.log(this.newContact);

    this.contactService.addContact(this.newContact).subscribe(
      response => {
      console.log("Contatto inserito: ",response);
    }),
    this.router.navigate(['/dashboard']);
  }

}
