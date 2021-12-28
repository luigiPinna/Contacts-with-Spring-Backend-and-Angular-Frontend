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

  constructor(private router : Router, private noteService : AgendaService) { }

  ngOnInit(): void {
  }

  newNote : AgendaData;

  onSubmit(form : NgForm){
    this.newNote = form.form.value;
    console.log("nota inserita: ", this.newNote);

    this.noteService.addNote(this.newNote).subscribe(
      res => {
        console.log("inserita: ", res);
      }),
      this.router.navigate(['agenda-dashboard']);
  }

}
