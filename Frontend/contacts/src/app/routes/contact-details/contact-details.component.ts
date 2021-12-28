import { HttpClient } from '@angular/common/http';
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

  constructor(private route: ActivatedRoute, private contactService : ContactService, private router : Router, private http: HttpClient) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleContact();
  }

  id : number;
  contact : ContactData;
  urlLink:string = "assets/profilePictures/1.jpg"

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

  selectFile(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any)=>{
        this.urlLink = event.target.result;
        console.log(this.urlLink);
      }
    }
  }




}
