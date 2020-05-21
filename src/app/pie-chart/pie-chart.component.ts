import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { PatientTable } from '../model/patientTable';
import { DataService } from '../service/data.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['Blood Pressure', 'Diabetes', 'TuberCulosis', 'HyperPigmentation'];
  public pieChartData:Array<number>;
  public pieChartType = 'pie';

  constructor(
      private ps : PatientService,
      private ds : DataService
  ) { 


  }

    @Input() piedata:PatientTable[];

  ngOnInit(): void {
    this.refreshPie();
    
    
  }

  ngOnChanges():void{
    this.refreshPie();
  }
  getChartData(array: Array<any>){
    
    const glucoseCount = array.filter((obj)=> {
      return obj.Disease == "blood pressure"
    }).length

    const diabetesCount = array.filter((obj)=> {
      return obj.Disease == 'diabetes'
    }).length

    const tbCount = array.filter((obj)=> {
      return obj.Disease == 'tuberculosis'
    }).length

    const hpCount = array.filter((obj)=> {
      return obj.Disease == 'hyperpigmentation'
    }).length
  
    return [glucoseCount, diabetesCount, tbCount, hpCount]
  }

  refreshPie(){
    this.ps.getData().subscribe(data=>{
     
      this.piedata = data.map(patient=> {
          return {          
            Disease: patient.disease,
            Gender : patient.gender,
            Email : patient.email,
            Name : patient.name
          }
        });

        this.pieChartData = this.getChartData(this.piedata);
      });
  }
}
