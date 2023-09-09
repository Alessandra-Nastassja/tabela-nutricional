import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tabela-nutricional';

  constructor(private appService: AppService ){}

  ngOnInit(){
    this.getListFruit();
  }

  getListFruit() {
    this.appService.getListFruit().subscribe((res) => {
      console.log('res', res);
      
    })
  }
}
