import { ContactData } from './../../models/contact';
import { ContactService } from './../../services/contact/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-contact',
  templateUrl: './upload-contact.component.html',
  styleUrls: ['./upload-contact.component.css']
})
export class UploadContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contactService:ContactService, private router : Router) { }

  contact:ContactData;
  id : number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleContact();
  }

  getSingleContact(){
    this.contactService.getContact(this.id).subscribe((response : any) =>{
      this.contact = response;
      console.log("Utente trovato: ", response)
    })
  }

  onSubmit(){
    this.contactService.editContact(this.contact).subscribe(res => {
      console.log(res);
      this.router.navigate(['/contact-details',this.contact.id]);
    }), err => {
      console.log(err);
    }
    this.router.navigate(['/contact-details',this.contact.id]);
  }
}
