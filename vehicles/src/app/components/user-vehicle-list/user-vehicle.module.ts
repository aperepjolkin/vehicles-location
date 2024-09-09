// user-vehicle.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserVehicleListComponent } from './user-vehicle-list.component';

@NgModule({
  declarations: [UserVehicleListComponent],
  imports: [CommonModule],
  exports: [UserVehicleListComponent]
})
export class UserVehicleModule { }