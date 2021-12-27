import { ContactService } from './../../services/contact/contact.service';
import { ContactData } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contactService : ContactService, private router : Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleContact();
  }

  id : number;
  contact : ContactData;

  getSingleContact(){
    this.contactService.getContact(this.id).subscribe((response : any) =>{
      this.contact = response;
      console.log("Utente trovato: ", response)
    })
  }

  deleteContact(){
    this.contactService.deleteContact(this.id).subscribe(
      (data) => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/dashboard']);
    });
  }

}
