import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private diseaseDataSource = new BehaviorSubject<Array<number>>([])
  diseaseData$ = this.diseaseDataSource.asObservable();


  updateDiseaseData(diseaseDataParam : number[]){
    this.diseaseDataSource.next(diseaseDataParam);
  }
  
}
