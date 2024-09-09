// user-vehicle-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserVehicleService } from '../../services/user-vehicle.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-vehicle-list',
  templateUrl: './user-vehicle-list.component.html',
  styleUrls: ['./user-vehicle-list.component.css']
})
export class UserVehicleListComponent implements OnInit {
  users: User[] = [];

  constructor(private userVehicleService: UserVehicleService) {}

  ngOnInit(): void {
    this.userVehicleService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}