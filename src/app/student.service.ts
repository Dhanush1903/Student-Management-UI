import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:8082/save"
const URLGET="http://localhost:8082/allStudents"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 

  constructor(public http:HttpClient) { }
// Register A student
  createStudent(students:{ 
    firstName:string;
    lastName:string;
    classname:number;
    dob:Date;
    
  
    }){
      return this.http.post(URL, students)
  
    }

    // Get list of all students
    getAllStudents(){
      return this.http.get(URLGET)
    }


    // Edit a student
    updateStudent(id:number, students:{  
      firstName:string;
    lastName:string;
    classname:number;
    dob:Date;
      
      }){
      return this.http.put(`http://localhost:8082/update/${id}`,students)
    
    
    }

    // delete particular student
    deleteStudent(id:number){
      return this.http.delete(`http://localhost:8082/delete/${id}`);
    }


    // Search student by class name
    seachByClass(classname:number){
      return this.http.get(`http://localhost:8082/getStudentclass/${classname}`);
    }

    // Seach student by id
    searchByid(id:number){
      return this.http.get(`http://localhost:8082/getStudent/${id}`);
    }
}
