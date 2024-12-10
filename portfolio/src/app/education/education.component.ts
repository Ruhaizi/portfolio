import { Component } from '@angular/core';
import { NgModule } from  '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educationList = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University at Buffalo SUNY",
      duration: "August 2023 - December 2024",
      description: `Specialization: Artificial Intelligence & Machine Learning. 
                    Courses include Algorithms Analysis & Design, Introduction to Machine Learning, 
                    Deep Learning, Computer Security, Operating Systems, and Predictive Analytics. 
                    Achieved a cumulative GPA of 3.917. Engaged in projects related to AI/ML, 
                    computer vision, and data analytics.`,
      cgpa: 3.917
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Vardhaman College of Engineering",
      duration: "July 2017 - June 2021",
      description: "Focused on Full Stack Development, Database Management, and Software Engineering.",
      cgpa: 3.7
    }
  ];

}
