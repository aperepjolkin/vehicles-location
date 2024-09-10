import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service'; // Import the VehicleService
import { Vehicle } from '../../models/vehicle.model'; // Import the Vehicle model

@Component({
  selector: 'app-user-vehicle',
  standalone: true,
  templateUrl: './user-vehicle.component.html',
  styleUrls: ['./user-vehicle.component.css']
})
export class UserVehicleComponent implements OnInit {
  userId: string | null = null;
  @Input() vehicle!: Vehicle;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService // Inject the VehicleService
  ) {}


  ngOnInit(): void {
    const userId = this.activatedRoute.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('userId');
      if (this.userId) {
        this.getVehicle(this.userId);
      }
    });
  }

  getVehicle(userId: string): void {
    this.vehicleService.getVehicleByUserId(userId).subscribe(vehicle => {
      console.log(vehicle);
    });
  }
}