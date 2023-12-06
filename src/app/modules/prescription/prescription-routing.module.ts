import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePrescriptionComponent } from './create-prescription/create-prescription.component';
 


const routes: Routes = [
  {path: '', component: CreatePrescriptionComponent},
  // {path: 'appointmentform', component: CreateAppointmentFormComponent},
  // {path: 'edit-appointmenform/:id', component: EditAppointmentFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
