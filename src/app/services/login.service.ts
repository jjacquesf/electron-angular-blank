import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private electronService: ElectronService) {}

  public login(email) {
    if(!navigator.onLine) {
      return this.electronService.ipcRenderer.sendSync('login', email);
    } else {
      console.log('Remote login');
    }
  }
}
