import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar : MatSnackBar) {

   }

   config: MatSnackBarConfig = {
     duration: 3000,
     verticalPosition: 'top'
   }

   success(message){
     this.snackBar.open(message,'', this.config);
   }


}
