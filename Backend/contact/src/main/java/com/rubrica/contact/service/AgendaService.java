package com.rubrica.contact.service;

import com.rubrica.contact.dao.AgendaDAO;
import com.rubrica.contact.model.Agenda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@Service
public class AgendaService {
    AgendaDAO agendaDAO;

    @Autowired
    public AgendaService(@Qualifier("dbAgendaDAO")AgendaDAO agendaDAO) {
        this.agendaDAO = agendaDAO;
    }

    //CRUD operations:

    //GET all
    public Iterable<Agenda> getAllNotes(){
        return agendaDAO.findAll();
    }

    //GET single
    public Agenda getNote(int id){
        Optional<Agenda> selectedNote = agendaDAO.findById(id);
        return  selectedNote.orElse(null);
    }

    //POST
    public String addNote(Agenda note){
        Agenda result = agendaDAO.save(note);
        if(result != null && result.getId() != 0){
            return "Note saved";
        }else{
            return "Error saving note";
        }
    }

    //PUT
    public String updateNote(int id, Agenda note){
        note.setId(id);
        Agenda result = agendaDAO.save(note);
        if(result != null && result.getId() != 0){
            return "Note updated";
        }else{
            return "Error updating note";
        }
    }

    //DELETE
    @CrossOrigin(origins = "*")
    public String deleteNote(int id){
        Agenda result = agendaDAO.findById(id).orElse(null);
        if(result == null){
            return "Note not found";
        }else{
            agendaDAO.deleteById(id);
            return "Note delected";
        }
    }
}

