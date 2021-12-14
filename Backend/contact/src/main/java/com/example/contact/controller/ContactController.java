package com.example.contact.controller;

import com.example.contact.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.contact.service.ContactService;

@RestController
@RequestMapping("/contacts")
public class ContactController {
    public ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    //CRUD operations (Create Read Upload Delete)
    @PostMapping("/")
    public String addContact(@RequestBody Contact contact){
        return contactService.addContact(contact);
    }

    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable("id") int id){
        return contactService.getContact(id);
    }

    @GetMapping("/")
    public Iterable<Contact> getAll(){
        return contactService.getAllContacts();
    }
}
