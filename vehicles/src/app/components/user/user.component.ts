import { Component, computed, Input } from '@angular/core';
import { type User } from '../../models/user.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User; // Corrected decorator and usage

  imagePath = computed(() => 'users/' + this.user.avatar);
}
