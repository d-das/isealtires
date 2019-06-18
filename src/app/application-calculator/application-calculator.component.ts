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
  @Input() public offRoad:boolean = false;
  @Input() public width:number = 0;
  @Input() public rim:number = 0;
  public fluidOz: number = 0;
  public handPumps: number = 0;
  public applicationOz: number = 0;

  constructor() {
    console.log("greetings from app calc constructor");

  }

  ngOnInit() {
  }

  setOffRoad(){
    this.offRoad = !this.offRoad;
  }
  calculate(){
    let x:number = (this.width*this.rim)*this.factorA;
    if(this.offRoad){
      console.log("x:", x);
      this.fluidOz = x*this.factorB;

    }
    else{
      this.fluidOz =x;
    }
    this.applicationOz = Math.ceil(this.fluidOz/4)*4;
    this.handPumps = this.fluidOz/this.factorC;

    //round out the floats
    this.fluidOz = parseFloat(this.fluidOz.toFixed(1));
    this.handPumps = parseFloat(this.handPumps.toFixed(1));
    console.log("fluidOz:", this.fluidOz);
    console.log("handPumps:", this.handPumps);

  }
}
