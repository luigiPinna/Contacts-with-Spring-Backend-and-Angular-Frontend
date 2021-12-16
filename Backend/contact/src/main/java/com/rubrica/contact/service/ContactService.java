package com.rubrica.contact.service;

import com.rubrica.contact.dao.ContactDAO;
import com.rubrica.contact.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContactService {
    ContactDAO contactDAO;

    @Autowired
    public ContactService(@Qualifier("dbContactDAO") ContactDAO contactDAO) {
        this.contactDAO = contactDAO;
    }

    //CRUD:
    //Get all contacts from the list
    public Iterable<Contact> getAllContacts(){
        return contactDAO.findAll();
    }

    //Get one contact by id
    public Contact getContact(int id){
        Optional<Contact> selectedContact = contactDAO.findById(id);
        //if present, return contact else return null
        return selectedContact.orElse(null);
    }

    //save the contact in the DB
    public String addContact(Contact contact){
        Contact result = contactDAO.save(contact);
        if(result != null && result.getId() != 0){
            return "Contact saved";
        }else{
            return "Error saving contact";
        }
    }

    //update the contact passed
    public String updateContact(int id, Contact contact){
        contact.setId(id);
        Contact result = contactDAO.save(contact);
        if(result != null && result.getId() != 0){
            return "Contact updated";
        }else{
            return "Error updating contact";
        }
    }

    public String deleteContact(int id){
        Contact contactFound = contactDAO.findById(id).orElse(null);
        if(contactFound == null){
            return "Contact not found";
        }else{
            contactDAO.deleteById(id);
            return "Contact deleted";
        }
    }

}
