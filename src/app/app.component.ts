import { Component } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Flip} from "gsap/Flip";
import {Draggable} from "gsap/Draggable";
// import {ScrambleTextPlugin} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(Flip);
gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'institut-angular';
}
