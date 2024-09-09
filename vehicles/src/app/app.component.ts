import { UserVehiclesComponent } from './components/user-vehicles/user-vehicles.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsersModule } from './components/users-list/users.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { MapViewComponent } from './components/map-view/map-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, UsersListComponent, UserComponent, UserVehiclesComponent, MapViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fix the property name
})
export class AppComponent {
  title = 'vehicles';
}
