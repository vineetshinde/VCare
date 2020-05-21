import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {

  @Input() label:string
  @Input() type:string
  @Input() data : Patient[]

  bpCount:number
  diabetesCount: number
  tbCount:number
  hpCount: number
  count : number
  constructor() { }

  ngOnInit(): void {
    this.renderCard();
  }

  ngOnChanges(){
    this.renderCard();
  }

  renderCard(){
    this.bpCount = this.data.filter((obj)=> {
      return obj.disease == "blood pressure"
    }).length

    this.diabetesCount = this.data.filter((obj)=> {
      return obj.disease == 'diabetes'
    }).length

    this.tbCount = this.data.filter((obj)=> {
      return obj.disease == 'tuberculosis'
    }).length

     this.hpCount = this.data.filter((obj)=> {
      return obj.disease == 'hyperpigmentation'
    }).length

    this.showCount();

  }

  showCount(){
    if(this.label == "Diabetes")
      this.count =  this.diabetesCount
    else if(this.label == "Blood Pressure")
      this.count = this.bpCount
    else if(this.label == "Tuberculosis")
      this.count = this.tbCount
    else
      this.count = this.hpCount
    
  }
}
