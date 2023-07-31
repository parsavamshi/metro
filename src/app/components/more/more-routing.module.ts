import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CoreValuesComponent } from './core-values/core-values.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {path:'',redirectTo:'/media',pathMatch:'full'},
  {path:'core-values', component:CoreValuesComponent},
  {path:'media', component:MediaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule { }
