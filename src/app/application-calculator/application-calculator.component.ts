import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application-calculator',
  templateUrl: './application-calculator.component.html',
  styleUrls: ['./application-calculator.component.scss']
})
export class ApplicationCalculatorComponent implements OnInit {

  private factorA:number = 0.1780327;
  private factorB:number = 3;
  private factorC:number = 8;
  @Input() public offRoad:boolean = true;
  @Input() public width:number = 0;
  @Input() public rim:number = 0;
  public fluidOz: number = 0;
  public handPumps: number =0;
  changeLog: string[] = [];

  constructor() {
    console.log("greetings from app calc constructor");

  }

  ngOnInit() {
  }

  setOffRoad(){
    this.offRoad = !this.offRoad;
  }
  calculate(){
    let x = (this.width*this.rim)*this.factorA;
    if(this.offRoad){
      this.fluidOz = x*this.factorB;
    }
    else{
      this.fluidOz =x;
    }

    this.handPumps = this.fluidOz/this.factorC;

    console.log("fluidOz:", this.fluidOz);
    console.log("handPumps:", this.handPumps);
  }
}
