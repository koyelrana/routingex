import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import { StudentService } from "../student.service";


@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {

  student = new Student;
  constructor(private stuService: StudentService) {}
 
  ngOnInit() {
  }
  addStudent() {
  this.stuService.createStudent(this.student);
  this.clearmodel();
  }
  clearmodel()
  {
    this.student.name="";
    this.student.phoneno=null;
    this.student.department="";
    this.student.city="";
    this.student.email="";
  }

}




 
