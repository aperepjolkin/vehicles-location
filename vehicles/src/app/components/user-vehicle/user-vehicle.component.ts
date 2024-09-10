import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-user-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './user-vehicle.component.html',
  styleUrl: './user-vehicle.component.css'
})
export class UserVehicleComponent {
  @Input() vehicle!: Vehicle;
}
