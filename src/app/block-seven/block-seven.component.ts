import {AfterViewInit, Component} from '@angular/core';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import {gsap} from "gsap";

@Component({
  selector: 'inst-block-seven',
  templateUrl: './block-seven.component.html',
  styleUrls: ['./block-seven.component.scss']
})
export class BlockSevenComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // /*------------------------------
// Init ScrollSmoother
// ------------------------------*/
//   ScrollSmoother.create({
//   content: '#content',
//   wrapper: '#wrapper',
//   smooth: true,
//   effects: false,
//   normalizeScroll: true
// })


    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.accordions',
    pin: true,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    // @ts-ignore
    ease: 'linear',
  }
})

tl.to('.accordion .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: .5,
})
tl.to('.accordion', {
  marginBottom: -15,
  stagger: .5,
}, '<')

  }

}
