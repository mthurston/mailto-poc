import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Errors';
  errors = [
  '1. ht format',
  '2. bad val',
  '3. line len',
  '4. lt format',
  '5. inv format']
  
  body = encodeURIComponent(`Issues
There were ${this.errors.length} issues with this game

${this.errors.join('\n')}
  `);
}
