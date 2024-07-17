import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  standalone: true,
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {
  bankerName = 'Jose Sahagun';
  bankerAddress = '325 Sunset Trl';
  bankerCity = 'Novato'
  bankerState = 'CA';
  bankerZip = '94945';
  bankerPhone = '415-729-4625';
  bankerEmail = 'jsahagun91@gmail.com';
  summary = 'Personable and organized developer with 5+ years of experience in creating software solutions and consistently surpassing customer expectations.';
  school = 'WESTERN GOVERNORS UNIVERSITY';
  schoolDates = '03/24 - present';
  schoolDegree = 'Bachelor of Science, Software Engineering';
  employerName = 'San Domenico School';
  jobTitle = 'Technology Support Specialist';
  employmentDates = '07/23 - 06/24'
  constructor() { }
  ngOnInit(): void { }
}
