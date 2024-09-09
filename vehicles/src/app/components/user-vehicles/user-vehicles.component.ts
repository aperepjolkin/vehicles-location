// user-vehicles.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router'; // Import Router module
import { CommonModule } from '@angular/common';
import { UserVehicleService } from '../../services/user-vehicle.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-vehicles',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule and RouterModule here
  templateUrl: './user-vehicles.component.html',
  styleUrls: ['./user-vehicles.component.css']
})
export class UserVehiclesComponent implements OnInit {
  user: User | null = null;
  private activatedRoute = inject(ActivatedRoute); // Add ActivatedRoute to the constructor parameters
  constructor(
    private route: ActivatedRoute,
    private userVehicleService: UserVehicleService,
    private router: Router // Add Router to the constructor parameters

  ) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        const userId = paramMap.get('userId');
        if (userId) {
          this.userVehicleService.getUserById(userId).subscribe((user) => {
            this.user = user || null;
          });
        }
      }
    });

  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}