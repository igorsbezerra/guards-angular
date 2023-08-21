import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  exit() {
    if (confirm('Sair?')) {
      return true;
    }
    return false;
  }
}
