import { ContactService } from './services/contact/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsDashboardComponent } from './routes/contacts-dashboard/contacts-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './routes/add-contact/add-contact.component';
import { ContactDetailsComponent } from './routes/contact-details/contact-details.component';
import { UploadContactComponent } from './routes/upload-contact/upload-contact.component';
import { AgendaComponent } from './routes/agenda/agenda.component';
import { AddNoteComponent } from './routes/add-note/add-note.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsDashboardComponent,
    AddContactComponent,
    ContactDetailsComponent,
    UploadContactComponent,
    AgendaComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
