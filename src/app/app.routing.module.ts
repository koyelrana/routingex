import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { StudentcreateComponent } from "./studentcreate/studentcreate.component";





 const routes: Routes = [
     {path:"create", component:StudentcreateComponent  }
    
     
     
     
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}