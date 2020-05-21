import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
// import { Observable } from 'rxjs';
// import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  user:User;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user=>{
      if(user){
        this.user = user;
        localStorage.setItem('user',JSON.stringify(this.user))
      }
      else{
        localStorage.setItem('user',null);
      }
    })
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(["/"])
  }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.afAuth.authState.map(auth => {
  //     if (isNullOrUndefined(auth)) {
  //       this.router.navigate(['/login']);
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  // }

}
