import { Component } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Flip} from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'institut-angular';
}
