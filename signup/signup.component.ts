import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  boo = 'true';

  getValues(val) {
    console.log(val);

    if(val.password !== val.confirmpassword) {
      this.boo = "false";
    }
  }
}
