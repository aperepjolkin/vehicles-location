// users-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserVehicleService } from '../../services/user-vehicle.service';
import { User } from '../../models/user.model';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users-list',
  imports: [UserComponent],
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userVehicleService: UserVehicleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userVehicleService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }



  trackByUserId(index: number, user: User): string {
    return user.userId;
  }
}