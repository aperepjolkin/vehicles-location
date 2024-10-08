// components/user-vehicles/user-vehicles.component.ts
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserVehicleService } from '../../services/user-vehicle.service';
import { User } from '../../models/user.model';
import { Vehicle } from '../../models/vehicle.model';
import { MapViewComponent } from '../map-view/map-view.component';
import { UserVehicleComponent } from '../user-vehicle/user-vehicle.component';

@Component({
  selector: 'app-user-vehicles',
  standalone: true,
  imports: [CommonModule, MapViewComponent, UserVehicleComponent],
  templateUrl: './user-vehicles.component.html',
  styleUrls: ['./user-vehicles.component.css']
})
export class UserVehiclesComponent implements OnInit {
  user: User | null = null;
  vehicles: Vehicle[] = [];
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userVehicleService: UserVehicleService

  ) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        const userId = paramMap.get('userId');
        if (userId) {
          this.userVehicleService.getUserById(userId).subscribe((user) => {
            this.user = user || null;
            this.loadVehicleLocations(userId);
          });
  }}})}

  loadVehicleLocations(userId: string): void {
    this.userVehicleService.getUserById(userId).subscribe((user) => {
      if (this.user) {
        this.vehicles = user?.vehicles ?? [];
        console.log(this.vehicles);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}