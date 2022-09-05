import { Component, OnInit } from '@angular/core';
import Student from 'Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  student:Student=new Student();
  students:Student[]=[];

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

  save(){
    const observable= this.studentService.createStudent(this.student);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        alert("Saved Succesfully")
      },
      function(error){
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
      
  
  }

}
