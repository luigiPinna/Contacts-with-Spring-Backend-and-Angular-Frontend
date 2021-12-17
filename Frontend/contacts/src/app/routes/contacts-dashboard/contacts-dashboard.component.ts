import { ContactData } from './../../models/contact';
import { ContactService } from './../../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-dashboard',
  templateUrl: './contacts-dashboard.component.html',
  styleUrls: ['./contacts-dashboard.component.css']
})
export class ContactsDashboardComponent implements OnInit {

  public contactsData : ContactData[];
  constructor(private contactsService : ContactService, private router : Router) { }


  ngOnInit(): void {
    this.getEntries();
  }


  getEntries(){
    this.contactsService.getAllContacts().subscribe( (response : any) => {
      this.contactsData = response;
      console.log("Contacts data: ",this.contactsData)
    })
    return this.contactsData;
  }

  goToDetails(id : number){
    this.router.navigateByUrl('/contact-details/'+id);
  }

}
