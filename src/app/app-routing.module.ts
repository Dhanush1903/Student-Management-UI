import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './Components/allstudents/allstudents.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

const routes: Routes = [{path:'register',component:RegisterComponent},
{path:'studentsList',component:AllstudentsComponent},
{path:'updateStudent/:id',component:UpdateStudentComponent},
{path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
