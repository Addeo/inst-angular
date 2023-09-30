import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import {Flip} from "gsap/Flip";
import {cardTask, CardTask} from "./card";

@Component({
  selector: 'inst-block-third',
  templateUrl: './block-third.component.html',
  styleUrls: ['./block-third.component.scss']
})
export class BlockThirdComponent implements OnInit {

  cards:CardTask[] = []
  activeClass = "is-active";

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.cards = cardTask
  }

  ngOnInit() {
    let sections = gsap.utils.toArray(".slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-sliders",
        pin: ".block-third-main",
        pinSpacing: true,
        scrub: 1,
        end: "+=3000",
      }
    });

    gsap.to('.next-block',{
      backgroundColor:'tomato',
      scrollTrigger:{
        trigger:'.next-block',
        pinnedContainer: ".main",
        start:'top 50%',
        toggleActions: 'play none reset none',
      }
    })


    const cards = document.querySelectorAll("[data-card]");
// Init
    cards.forEach((card, idx) => {
      this.updateCard(card, idx, false);
      card.addEventListener("click", (evt) => {
        this.updateCard(card, idx, !card.classList.contains(this.activeClass));
      });
    });

  }

  // @ts-ignore
  updateCard (card, idx, active) {
    const cardInner = card.querySelector(".card__inner");
    const image = card.querySelector(".card__image");

    // Bail out if we're in the middle of a flip
    if (Flip.isFlipping(cardInner)) return;

    const cardState = Flip.getState(cardInner, {
      props: "box-shadow, border-radius"
    });
    const imageState = Flip.getState(image);
    card.classList.toggle(this.activeClass, active);

    const duration = active ? 0.7 : 0.5;
    const ease = "quint.out";

    const cardContent = document.querySelectorAll(".content__group")[idx];
    gsap.killTweensOf(cardContent);
    gsap.to(cardContent, {
      duration: active ? 1 : 0.2,
      ease: "expo.out",
      // stagger: 0.1,
      alpha: active ? 1 : 0,
      // y: active ? 0 : 20,
      delay: active ? 0.4 : 0
    });

    Flip.from(cardState, {
      duration: duration,
      ease: ease,
      absolute: true,
      zIndex: 1
    });

    Flip.from(imageState, {
      duration: duration,
      absolute: true,
      ease: ease,
      simple: true
    });
  };
}
