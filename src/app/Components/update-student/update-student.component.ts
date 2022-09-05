import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Student from 'Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  student:Student=new Student();
  students:Student[]=[];

  constructor(public studentService:StudentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.student=new Student();
    this.id=this.route.snapshot.params['id'];
    
  }

  updateStudent() {
    const observable= this.studentService.updateStudent(this.id, this.student);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        alert("Updated Succesfully")
      },
      function(error){
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )


  }

}
