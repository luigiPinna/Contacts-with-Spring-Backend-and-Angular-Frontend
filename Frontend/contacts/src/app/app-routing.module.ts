import { AddNoteComponent } from './routes/add-note/add-note.component';
import { AgendaComponent } from './routes/agenda/agenda.component';
import { UploadContactComponent } from './routes/upload-contact/upload-contact.component';
import { ContactDetailsComponent } from './routes/contact-details/contact-details.component';
import { AddContactComponent } from './routes/add-contact/add-contact.component';
import { ContactsDashboardComponent } from './routes/contacts-dashboard/contacts-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "dashboard", component : ContactsDashboardComponent },
  { path: "add-contact", component : AddContactComponent },
  { path: "contact-details/:id", component : ContactDetailsComponent },
  { path: "upload-contact/:id", component : UploadContactComponent },
  { path: "agenda-dashboard", component : AgendaComponent },
  { path: "add-note", component : AddNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
