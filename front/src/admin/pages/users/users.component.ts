import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userService } from 'src/admin/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _user: userService) { }

  users$: Observable<User[]> | null = null;

  search: string | null = null;

  ngOnInit() {
    this.users$ = this._user.findAllUsers();
  }

  handleSearch(event: any) {
    const search = event.target.value;
    if (!search || search.length === 0) {
      this.ngOnInit();
    }
    this.users$ = this._user.searchByName(search);
  }
}
