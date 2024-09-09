// user-vehicle.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class UserVehicleService {
  // Mock data for demonstration purposes
  private users: User[] = [
    {
      userId: '1',
      userName: 'John Doe',
      vehicles: [
        { vehicleId: 'v1', vehicleName: 'Car A', latitude: 40.7128, longitude: -74.0060, userId: '1' },
        { vehicleId: 'v2', vehicleName: 'Car B', latitude: 34.0522, longitude: -118.2437, userId: '1' }
      ]
    },
    {
      userId: '2',
      userName: 'Jane Smith',
      vehicles: [
        { vehicleId: 'v3', vehicleName: 'Car C', latitude: 37.7749, longitude: -122.4194, userId: '2' }
      ]
    }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}