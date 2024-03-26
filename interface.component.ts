
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    switch (route) {
      case 'supprimer':
        // Redirection vers l'interface de suppression
        this.router.navigate(['/supprimer']);
        break;
      case 'ajouter':
        // Redirection vers l'interface ajout fleuriste
        this.router.navigate(['/fleuriste']);
        break;
      case 'modifier':
        // Redirection vers l'interface modifier
        this.router.navigate(['/modify']);
        break;
      default:
        console.error(`Route "${route}" non reconnue.`);
        break;
    }
  }
}
