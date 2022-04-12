import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{

  courses = COURSES;

  @ViewChild('cardRef', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {
    console.log("containerDiv", this.card1);
  }

  ngAfterViewInit() {
    console.log("containerDiv", this.card1);



  }

  title = COURSES[0].description;

  startDate = new Date(2022, 0, 1);

  price = 9.99;

  rate = 0.67;

  onCourseSelected(course:Course) {
    console.log(this.card1);
  }
}
