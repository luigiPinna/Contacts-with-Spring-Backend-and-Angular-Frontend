package com.example.contact.dao;

import com.example.contact.model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository("dbContactDAO")
public interface ContactRepositoryDAO extends CrudRepository<Contact, Integer> {
    public Contact findByName(String name);
    public List<Contact> findAllByName(String name);
}
