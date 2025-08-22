import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {

  moreProjects = "https://www.linkedin.com/in/marwan-aljaml-72129824b/details/projects/";
  DA = "assets/images/DA.png";
  FS1 = "assets/images/FS1.png";
  FS2 = "assets/images/FS2.png";


  projects = [
    {
      video: "assets/videos/FS1.mp4",
      image: this.FS1,
      title: "Online Courses Enrollment System",
      description: "This is Fullstack web appllication using ASP.NET Core for backend and API and Angular framework for frontend and UI, for database i use SQL Server for database and azure servecis like database, servers, application insights and azure functions also for security  the entra admin id help me for authentication  & authorization this project is designed as  T architecture its contain a lot of features to help users and admin to manage the system and courses.",
      github: 'https://github.com/MarwanJaml/online-course-api.git',
      demo: ''
    },
    {
      video: "assets/videos/BI-dash.mp4",
      image: this.DA,
      title: "Data Analyst Dashboard",
      description: "This is data analyst project i starting requirements gathering and understandingthe problems and the results which i conclude it then i made  data transformation using power query DAX For Bussnis Metrix  and KPIs,Also Power BI for reports and wrangling and clean the data also for data modeling and visualization.",
      github: '',
      demo: ''
    },
    {
      video: "assets/videos/FS2.mp4",
      image: this.FS2,
      title: "BI Dashboard",
      description: "This is Fullstack web appllication using ASP.NET Core for backend and API and Angular framework for frontend and UI, for database i use SQL Server for database this project is designed to track the daily changes for the bussnis  procses its contain a lot of features to help users and admin to manage the system and data,  the main feature in this project is visulization feature which give the stakeholder reports to understand how the data look like and what he should enhance.",
      github: 'https://github.com/MarwanJaml/bi-dashboard-api.git',
      demo: ''
    },




  ];






}
