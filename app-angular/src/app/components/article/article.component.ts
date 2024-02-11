import { Component } from '@angular/core';
import { ApiService } from '../../modules/app-module/services/api.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  constructor(private api:ApiService,private router:Router){}
  private dataSubscription: Subscription | undefined;
  data$!:Observable<any>
  ngOnInit(): void {
    this.data$ = this.api.getSession()
    this.dataSubscription = this.data$.subscribe(data =>{
      if(data){
        console.log(data)
      }else{
        this.router.navigate(['/connexion'])
      }
    })
  }
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
