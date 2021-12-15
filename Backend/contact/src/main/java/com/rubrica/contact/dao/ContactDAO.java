package com.rubrica.contact.dao;

import com.rubrica.contact.model.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactDAO extends CrudRepository<Contact, Integer> {
}
