package com.rubrica.contact.controller;


import com.rubrica.contact.model.Contact;
import com.rubrica.contact.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/contact")
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

    @PutMapping("/{id}")
    public String updateContact(@PathVariable("id") int id, @RequestBody Contact contact){
        return contactService.updateContact(id, contact);
    }

    @DeleteMapping("/{id}")
    public String deleteContact(@PathVariable("id")int id){
        return contactService.deleteContact(id);
    }


}