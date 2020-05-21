import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PatientService} from '../service/patient.service'
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Patient } from '../model/patient';
import { DataService } from '../service/data.service';
import { NotificationService } from '../notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  table_data: Patient[]

  displayedColumns: string[] = ['name', 'email', 'gender', 'disease','actions'];
  dataSource = new MatTableDataSource<Patient>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private ps: PatientService,
    private dialog : MatDialog,
    public notifyService : NotificationService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {  
    this.refresh();
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.notifyService.success("Successfully submitted");
      this.refresh();
    });
  }
  
  openEditDialog(row){  
    let dialogRef = this.dialog.open(AddDialogComponent, {
      height: '400px',
      width: '600px',
      data:{...row}
    });
    
    dialogRef.afterClosed().subscribe(()=>{
      this.notifyService.success("Upadated submitted");
      this.refresh();
    })


  }

  delete(row: Patient){
    this.ps.deletePatient(row).subscribe();
    this.notifyService.success("Deleted submitted");
    this.refresh();
  }


  logout(){
    this.auth.logout();
  }

  refresh(){
    this.ps.getData().subscribe(data=>{
      
      this.table_data = data;

      this.dataSource.data = this.table_data
      this.dataSource.paginator = this.paginator;
    })
    
  }
}
  
