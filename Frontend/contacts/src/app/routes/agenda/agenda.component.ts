import { DateAPIService } from './../../services/dateAPI/date-api.service';
import { DateInterface } from './../../models/dateAPI';
import { Router } from '@angular/router';
import { AgendaService } from './../../services/agenda/agenda.service';
import { AgendaData } from './../../models/agenda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  notes : AgendaData[];
  dateResults: DateInterface;

  constructor(private notesService : AgendaService, private router : Router, private dateService : DateAPIService) { }

  ngOnInit(): void {
    this.getNotes();
    this.getDateOnComponent();
  }

  getNotes(){
    this.notesService.getAllNotes().subscribe( (response : any) => {
      this.notes = response;
      console.log("Res: ",response);
    })
    return this.notes;
  }

  goToDetails(id : number){
    this.router.navigateByUrl('/note-details/'+id);
  }

   // Funzione di supporto GET Ora Corrente
   getDateOnComponent() {
    this.dateService.getCurrentDate().subscribe((res) => {
      this.dateResults = res;
      console.log("Results Date: ", this.dateResults);
      console.log("Results Time 24: ", this.dateResults.time_24);
      console.log("Results Date: ", this.dateResults.date);
    })
  }

   //Metodo che aggiorna la pagina
   reloadPage() {
    window.location.reload();
  }

  //Cancella la nota con l'id passato
  deleteNoteById(id : number){
    this.notesService.deleteNote(id).subscribe( (res) =>{
      console.log("l'id passato è: ", id);
      console.log("res: ", res);
    }),
    (err) => {
      console.log(err);
    }
  }


}
