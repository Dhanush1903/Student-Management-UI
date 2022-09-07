import { Component, OnInit } from '@angular/core';
import Student from 'Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-search-class',
  templateUrl: './search-class.component.html',
  styleUrls: ['./search-class.component.css']
})
export class SearchClassComponent implements OnInit {
 


  student:Student=new Student();
  students:Student[]=[];

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    
  }

 

  }

  

  


