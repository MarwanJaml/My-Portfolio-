import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Mic } from 'lucide-angular';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class CertificatesComponent {


  moreCertificates = "https://drive.google.com/drive/folders/11mC8eKDRJWEyekBTF6wuk-A6ZNsz6FZM?usp=sharing";
  certificates = [
    {
      title: "Data Analyst",
      org: "Microsoft",
      date: "2024-7-14",
      image: "assets/images/DA-MS.png",
      file: "assets/certificates/DA-MS.pdf",
    },
    {
      title: "Advanced Data Analyst",
      org: "Correlation One",
      date: "2025-6-21",
      image: "assets/images/DA-Honors.jpg",
      file: "assets/certificates/DA-Honors.pdf",

    },
    {
      title: "AWS Cloud Technical Essentials",
      org: "AWS",
      date: "2024-9-27",
      image: "assets/images/AWS.png",
      file: "assets/certificates/AWS.pdf",

    },
    {
      title: "Agile Development & Scrum",
      org: "IBM",
      date: "2024-9-10",
      image: "assets/images/Agile.png",
      file: "assets/certificates/Agile.pdf",

    }
  ];

}
