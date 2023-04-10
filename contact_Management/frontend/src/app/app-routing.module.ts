import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { ReadComponent } from './read/read.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'update/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'profile',component:ProfileComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'',component:ProfileComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
