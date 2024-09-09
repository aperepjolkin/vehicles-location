// user-vehicle.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Vehicle } from '../models/vehicle.model';
import { DUMMY_USERS } from '../../dummy-users';

@Injectable({
  providedIn: 'root'
})
export class UserVehicleService {
  // Mock data for demonstration purposes

  private users: User[] = [
    {
      userId: '1',
      userName: 'Jasmine Washington',
      avatar: 'user-1.jpg',

      vehicles: [
        { vehicleId: 'v1', vehicleName: 'Car A', latitude: 40.7128, longitude: -74.0060, userId: '1', color: 'green'},
        { vehicleId: 'v2', vehicleName: 'Car B', latitude: 34.0522, longitude: -118.2437, userId: '1', color: 'green' }
      ]
    },
    {
      userId: '2',
      userName: 'Jane Smith',
      avatar: 'user-2.jpg',
      vehicles: [
        { vehicleId: 'v3', vehicleName: 'Car C', latitude: 37.7749, longitude: -122.4194, userId: '2', color: 'green' }
      ]
    },
    {
      userId: '3',
      userName: 'Marcus Johnson',
      avatar: 'user-3.jpg',
      vehicles: [
        { vehicleId: 'v4', vehicleName: 'Car F', latitude: 38.7749, longitude: -125.4194, userId: '3', color: 'green' }
      ]
    }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(userId: string): Observable<User | null> {
    const user = this.users.find(user => user.userId === userId);
    return of(user ?? null);
  }
}