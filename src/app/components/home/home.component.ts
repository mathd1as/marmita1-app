import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private homeService: HomeService) {}
  public user = {
    email: 'default',
    id: 'default',
    password: 'default',
  };
  ngOnInit(): void {
    this.homeService.getUser('490f08d1-4185-4031-9bf7-008a3eba9fe4').subscribe(
      (response) => {
        console.log(response);
        this.user = { ...response };
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
