import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "./users.service";
import {FormControl, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {UserResponse} from "../_model/users/response.model";
import {MatSort} from "@angular/material/sort";
import {User} from "../_model/users/users.model";
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'actum-task > users';
  // Icons
  faUser = faUser;
  faGithub = faGithub;

  // FormControls + AutoComplete options
  searchName = new FormControl('', [Validators.required]);
  searchLocation = new FormControl('', [Validators.required]);
  searchLanguage = new FormControl('', [Validators.required]);
  optionsName: string[] = [];
  optionsCities: string[] = [];
  optionsLanguage: string[] = [];

  // MatPaginator Inputs
  length = 0;
  pageSize = 30;
  pageSizeOptions: number[] = [30, 50, 100, 150];

  // MatPaginator Output
  pageEvent: PageEvent;

  // Table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['id', 'login', 'type', 'site_admin', 'score'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private userService: UsersService,
  ) {
  }

  ngOnInit(): void {
    this.userService.users.subscribe((users: UserResponse | null) => {
      this.optionsName = [];
      if (users && users.items) {
        this.length = users.total_count;
        this.dataSource = new MatTableDataSource(users.items);
        this.dataSource.sort = this.sort;
        users.items.forEach((user: User) => {
          this.optionsName.push(user.login)
        });
      }
    });
    this.userService.locations.subscribe((cities: any[]) => {
      this.optionsCities = [];
      if (cities) {
        cities.forEach((city: any) => {
          this.optionsCities.push(city.name)
        });
      }
    });
    this.userService.languages.subscribe((languages: string[]) => {
      this.optionsLanguage = [];
      if (languages) {
        languages.forEach((language: string) => {
          this.optionsLanguage.push(language)
        });
      }
    });
    this.searchName.valueChanges.subscribe((value: string) => {
      console.log('input change');
      this.onInputTextChanged(value, 'name');
    });
    this.searchLocation.valueChanges.subscribe((value: string) => {
      this.onInputTextChanged(value, 'location');
    });
    this.searchLanguage.valueChanges.subscribe((value: string) => {
      this.onInputTextChanged(value, 'language');
    });
  }

  changePage(event: PageEvent) {
    this.userService.perPage = event.pageSize;
    this.userService.page = event.pageIndex + 1;
    this.userService.getUsers();
    return event;
  }

  onInputTextChanged(value: string, param: string) {
    if (value.length >= 3 || value.length === 0) this.userService.onFilterChanged(value, param);
  }

}
