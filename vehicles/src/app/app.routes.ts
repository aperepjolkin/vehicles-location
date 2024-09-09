import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserVehiclesComponent } from './components/user-vehicles/user-vehicles.component';
import { NoVehiclesComponent } from './components/no-vehicles/no-vehicles.component';

export const routes: Routes = [
  { path: '' , component: NoVehiclesComponent },
  { path: 'user-vehicles/:userId', component: UserVehiclesComponent }
];
