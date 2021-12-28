import { DateInterface } from './../../models/dateAPI';
import { DateAPIService } from './../../services/dateAPI/date-api.service';
import { NgForm } from '@angular/forms';
import { AgendaData } from './../../models/agenda';
import { AgendaService } from './../../services/agenda/agenda.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private router : Router, private noteService : AgendaService, private dateService : DateAPIService) { }

  ngOnInit(): void {
  this.getDateOnComponent();
  }

  newNote : AgendaData;
  dateResults: DateInterface;

  //Invia la nuova nota al database
  onSubmit(form : NgForm){
    this.newNote = form.form.value;
    this.newNote.date = this.dateResults.date;
    console.log("nota inserita: ", this.newNote);

    this.noteService.addNote(this.newNote).subscribe(
      res => {
        console.log("inserita: ", res);
      }),
      this.router.navigate(['agenda-dashboard']);
  }

   // Funzione di supporto GET Ora Corrente
   getDateOnComponent() {
    this.dateService.getCurrentDate().subscribe((res) => {
      this.dateResults = res;
      console.log("Results Time 24: ", this.dateResults.time_24);
      console.log("Results Date: ", this.dateResults.date);
    })
  }
}
