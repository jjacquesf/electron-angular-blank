import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loginService: LoginService) {}

  public login() {
    console.log(this.loginService.login('jjacquesf@gmail.com'));
    // if(this.electronService.isElectronApp) {
    // }
  }

}
