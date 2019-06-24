import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application-calculator',
  templateUrl: './application-calculator.component.html',
  styleUrls: ['./application-calculator.component.scss']
})
export class ApplicationCalculatorComponent implements OnInit {

  //sealant factor
  private factorA:number = 0.1780327;
  // offroad factor
  private factorB:number = 3;
  // hand pump factor
  private factorC:number = 8;
  // inches factor
  private factorD:number = 0.0393701;
  @Input() public width:number = 0;
  @Input() public rim:number = 0;
  private sWidth:number = 0;
  private sRim:number = 0;
  public fluidOz: number = 0;
  public handPumps: number = 0;
  public applicationOz: number = 0;
  public measurements:Array<Object> = [
    {val: false, name: "Standard"},
    {val: true, name: "Metric"}
  ]
  public roads:Array<Object> = [
    {val: false, name: "On Road"},
    {val: true, name: "Off Road"}
  ]
  @Input() public selectedMeasure = this.measurements[0].val;
  @Input() public selectedRoad = this.roads[0].val;


  constructor() {
    console.log("greetings from app calc constructor");

  }

  ngOnInit() {
  }

  calculate(){
    console.log("selectedMeasure:", this.selectedMeasure);
    console.log("selectedRoad:", this.selectedRoad);
    if(this.selectedMeasure){
      this.sWidth=this.width*this.factorD;
      this.sRim=this.rim*this.factorD;
    }
    else{
      this.sWidth = this.width;
      this.sRim = this.rim
    }
    let x:number = (this.sWidth*this.sRim)*this.factorA;
    if(this.selectedRoad){
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
  setMetric(metric:boolean){
    console.log("measurement set: ", metric);
  }
  setOffroad(road:boolean){
    console.log("road set: ", road);
  }
}
