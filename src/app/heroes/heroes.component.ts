import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm'

  constructor() { }

//ngOnChanges is called whenever angular detects changes to input properties of the component (or directive). This example monitors the OnChanges hook.
//ngOnInit Is called only once, when the component is mounted
  ngOnInit() {
  }

}
