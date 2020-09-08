import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gridStyle = {
    width: '40%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white'
  };
  gridStyle1 = {
    width: '60%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white'
  };


  gridStyle2 = {
    width: '50%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white',
    height: '50px'
  };

}
