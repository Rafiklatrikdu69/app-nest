import { Component } from '@angular/core';
import { ApiService } from '../../modules/app-module/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getMessage().subscribe(message =>{
      console.log(JSON.stringify(message))
    })
    this.api.insertUser().subscribe(message =>{
    
    })
  }

}
