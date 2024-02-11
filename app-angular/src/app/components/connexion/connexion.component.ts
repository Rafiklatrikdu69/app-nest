import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { ApiService } from '../../modules/app-module/services/api.service';
import { User } from '../../modules/app-module/models/User';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',

})
export class ConnexionComponent {
  constructor(private api :ApiService,private cdr: ChangeDetectorRef,private router:Router){}
  items: any[] = ['Item 1', 'Item 2', 'Item 3'];
  data$!:Observable<any>
  private dataSubscription: Subscription | undefined;
  form:any={
    pseudo: null,
    password:null
  }
  value: string = 'Initial value';
  ngOnInit(): void {
    //  this.api.deleteSession().subscribe(data => {
        
    //  })
    
   
  }

   onSubmit(){
    if(this.form.pseudo==null|| this.form.password==null){
      //erreur a traiter  
    }else{  
      console.log("envoie")
      let u = new User(1,this.form.pseudo,this.form.password)
      this.data$=  this.api.getUser(u)
      this.dataSubscription = this.data$.subscribe(data=>{
        console.log(data)
        if(!data){
          
        }else{
         this.api.addSession(this.form.pseudo).subscribe()
         this.router.navigate(['/article'])
        }
      })
      
    }
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
