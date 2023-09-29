import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'inst-block-five',
  templateUrl: './block-five.component.html',
  styleUrls: ['./block-five.component.scss'],
  host: {
    class: 'inst-block-five',
  },
})
export class BlockFiveComponent implements OnInit{
  @ViewChild('races', { static: true }) races!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    const tween = gsap.to(this.races.nativeElement, {
      x: this.getScrollAmount(),
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger:".racesWrapper",
      start:"top 50%",
      end: () => `+=${this.getScrollAmount() * -1}`,
      pin:true,
      animation:tween,
      scrub:1,
      invalidateOnRefresh:true
    })

  }

   getScrollAmount() {
    let racesWidth = this.races.nativeElement.scrollWidth;
    return -(racesWidth - window.innerWidth);
  }

}
