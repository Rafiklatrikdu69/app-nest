import { Component } from '@angular/core';
import { ApiService } from '../../modules/app-module/services/api.service';
import { User } from '../../modules/app-module/models/User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  constructor(private api :ApiService){}
  form:any={
    pseudo: null,
    password:null
  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.form.pseudo==null){
      //erreur a traiter  
    }else{  
      console.log("envoie")
      let u = new User(1,this.form.pseudo)
      this.api.getUser(u).subscribe(data=>{
        console.log(data)
        if(!data){
          this.api.insertUser(u).subscribe(data =>{
          
          })
        }
      })
      
    }
  }
}
