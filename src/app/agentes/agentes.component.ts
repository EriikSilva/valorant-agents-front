import { Component } from '@angular/core';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent {

  displayResponsive:any;


  showResponsiveDialog(){
    this.displayResponsive = true 
  }

}
