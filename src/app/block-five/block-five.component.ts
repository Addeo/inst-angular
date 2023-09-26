import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'inst-block-five',
  templateUrl: './block-five.component.html',
  styleUrls: ['./block-five.component.scss']
})
export class BlockFiveComponent implements OnInit{
  @ViewChild('races', { static: true }) races!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    // master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 240 video lessons


    console.log(this.races.nativeElement.offsetWidth)
    //
    // function getScrollAmount() {
    //   let racesWidth = races.scrollWidth;
    //   return -(racesWidth - window.innerWidth);
    // }
    //
    // const tween = gsap.to(races, {
    //   x: getScrollAmount,
    //   duration: 3,
    //   ease: "none",
    // });


  }

}
