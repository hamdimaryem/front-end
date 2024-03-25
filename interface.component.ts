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
    if (route === 'supprimer') {
      // Redirection vers l'interface de suppression
      this.router.navigate(['/supprimer']);
    } else if (route === 'ajouter') {
      // Redirection vers l'interface fleuriste
      this.router.navigate(['/fleuriste']);
    } else {
      // Redirection vers la modification
      // Vous devez remplacer 'modifier' par le nom de la route de modification dans votre application
      this.router.navigate(['/modifier']);
    }
  }
}
