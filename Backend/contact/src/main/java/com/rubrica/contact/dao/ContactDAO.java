package com.rubrica.contact.dao;

import com.rubrica.contact.model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Repository("dbContactDAO")
public interface ContactDAO extends CrudRepository<Contact, Integer> {
}
