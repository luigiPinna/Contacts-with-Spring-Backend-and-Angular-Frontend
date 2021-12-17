import { ContactDetailsComponent } from './routes/contact-details/contact-details.component';
import { AddContactComponent } from './routes/add-contact/add-contact.component';
import { ContactsDashboardComponent } from './routes/contacts-dashboard/contacts-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "dashboard", component : ContactsDashboardComponent },
  { path: "add-contact", component : AddContactComponent },
  { path: "contact-details/:id", component : ContactDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
