import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-how-to-install',
  templateUrl: './how-to-install.component.html',
  styleUrls: ['./how-to-install.component.scss']
})
export class HowToInstallComponent implements OnInit {

  public english:boolean = true;

  setEnglish(){ this.english = true}
  setSpanish(){ this.english = false}

  constructor() { }

  ngOnInit() {
  }


}
