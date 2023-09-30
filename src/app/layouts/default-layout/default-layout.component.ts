import {AfterViewInit, Component} from '@angular/core';
import {gsap} from "gsap";

@Component({
  selector: 'inst-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // gsap.to(this.imageSecond.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.imageSecond.nativeElement,
    //     scrub: true,
    //     start: '80% center',
    //   } as gsap.plugins.ScrollTriggerInstanceVars,
    //   duration: 1.1,
    //   scale: 1.2,
    //   height: 380,
    // });
  }

}
