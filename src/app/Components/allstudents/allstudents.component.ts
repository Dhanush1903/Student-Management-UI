import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from 'Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  student:Student=new Student();
  students:Student[]=[];

  constructor(public studentService:StudentService,
    public router:Router) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  editStudent(id:number){

    console.log()
this.router.navigate(['updateStudent',id])

  }

  getAll(){
    const promise=this.studentService.getAllStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students=response as Student[];
    })
  }



  deleteStudent(id:number){
    const promise=this.studentService.deleteStudent(id);   
    promise.subscribe((response)=>{
      console.log(response);
      this.getAll();
      alert("Deleted Succesfully")
    })

  }

}
