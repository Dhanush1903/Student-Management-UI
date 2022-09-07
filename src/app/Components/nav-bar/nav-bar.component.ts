import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from 'Entity/Student';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  student:Student=new Student();
  students:Student[]=[];

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  searchClass(classname:number){
    this.router.navigate(['searchClass',classname])

  }

}
