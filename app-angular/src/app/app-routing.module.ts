import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ArticleComponent } from './components/article/article.component';
import { BourseDisplayComponent } from './components/bourse-display/bourse-display.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'bourse',component: BourseDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
