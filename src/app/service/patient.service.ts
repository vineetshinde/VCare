import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from '../model/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) { }

  public url = '/api/patients'
  
  getData(){
    return this.http.get<Patient[]>(this.url)
  }

  insertPatient(formValue){
    const patient = {
      id:Math.floor(Math.random() * (999999 - 100000)) + 100000,
      ...formValue,
      gender: (formValue.gender === "1") ? "male" : "female"
    }
    return this.http.post(this.url,patient);
   
  }

  updatePatient(formValue){
    let patient = {
      ...formValue,
      gender: (formValue.gender === "1") ? "male" : "female"
    }
    const url = `${this.url}/${patient.id}`; 
    return this.http.put<Patient>(url, patient )
  }

  deletePatient(formValue){
    let patient = {
      ...formValue,
      gender: (formValue.gender === "male") ? "male" : "female"
    }
    const url = `${this.url}/${patient.id}`; 
  return this.http.delete(url);
  }
}
