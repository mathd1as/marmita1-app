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
    name: 'default',
  };
  ngOnInit(): void {
    const userId = localStorage.getItem('userId') || '';
    // this.homeService.getUser(userId).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.user = { ...response };
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
