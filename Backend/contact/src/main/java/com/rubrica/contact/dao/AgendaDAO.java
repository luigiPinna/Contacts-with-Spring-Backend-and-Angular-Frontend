package com.rubrica.contact.dao;

import com.rubrica.contact.model.Agenda;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Repository("dbAgendaDAO")
public interface AgendaDAO extends CrudRepository<Agenda, Integer> {
}
