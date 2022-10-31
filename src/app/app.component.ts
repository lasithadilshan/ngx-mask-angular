import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-mask-angular';

  public customPatterns = { '0': { pattern: new RegExp('([12]\d{3} (0[1-9]|1[0-2]) (0[1-9]|[12]\d|3[01])) \d{10}') } };

}
