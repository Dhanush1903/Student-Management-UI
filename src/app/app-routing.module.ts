import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AllstudentsComponent } from './Components/allstudents/allstudents.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

const routes: Routes = [{path:'register',component:RegisterComponent},
{path:'studentsList',component:AllstudentsComponent},
{path:'updateStudent/:id',component:UpdateStudentComponent},
{path:'',component:HomeComponent},
{path:'aboutUs',component:AboutUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
