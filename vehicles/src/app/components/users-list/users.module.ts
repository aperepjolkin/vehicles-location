// user-vehicle.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UserVehiclesComponent } from '../user-vehicles/user-vehicles.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, RouterModule, UserComponent],
  exports: []
})
export class UsersModule { }