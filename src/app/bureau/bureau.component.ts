import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onTabChanged(event: MatTabChangeEvent){

  }
  
}
