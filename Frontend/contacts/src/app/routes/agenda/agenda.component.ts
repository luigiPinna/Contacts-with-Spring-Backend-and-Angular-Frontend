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

  public notes : AgendaData[];

  constructor(private notesService : AgendaService, private router : Router) { }


  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notesService.getAllNotes().subscribe( (response : any) => {
      this.notes = response;
      console.log("Notes data: ",this.notes);
    })
    return this.notes;
  }

  goToDetails(id : number){
    this.router.navigateByUrl('/note-details/'+id);
  }
}
