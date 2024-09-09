import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserVehicleModule } from './components/user-vehicle-list/user-vehicle.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserVehicleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehicles';
}
