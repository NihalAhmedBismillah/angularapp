import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IParentData} from '../models/parentData';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  @Output()messageEvent  = new EventEmitter<IParentData>();

  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
   console.log('I called');
   this.messageEvent.emit(<IParentData>{name:'Nihal',address:'Pune'})
  }

}
