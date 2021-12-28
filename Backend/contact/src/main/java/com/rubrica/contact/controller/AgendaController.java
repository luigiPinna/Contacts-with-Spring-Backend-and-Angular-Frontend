package com.rubrica.contact.controller;

import com.rubrica.contact.model.Agenda;
import com.rubrica.contact.service.AgendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/agenda")
public class AgendaController {
    public AgendaService agendaService;

    @Autowired
    public AgendaController(AgendaService agendaService) {
        this.agendaService = agendaService;
    }

    //CRUD Operations

    //GET single
    @GetMapping("/{id}")
    public Agenda getNoteById(@PathVariable("id") int id){
        return agendaService.getNote(id);
    }
    //GET all
    @GetMapping("/")
    public Iterable<Agenda> getAll(){
        return agendaService.getAllNotes();
    }

    //PUT
    @PostMapping("/")
    public String addNote(@RequestBody Agenda agenda){
        return agendaService.addNote(agenda);
    }

    //DELETE
    @DeleteMapping("/{id}")
    public String updateNote(@PathVariable("id") int id, @RequestBody Agenda note){
        return agendaService.deleteNote(id);
    }
}
