import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'inst-block-four',
  templateUrl: './block-four.component.html',
  styleUrls: ['./block-four.component.scss']
})
export class BlockFourComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const $q = document.querySelectorAll.bind(document);
    const $g = document.querySelector.bind(document);
    const $prev = $g(".prev");
    const $next = $g(".next");
    const $list = $g(".carousel__list");
    // @ts-ignore
    let auto;
    // @ts-ignore
    let pauser;

    const getActiveIndex = () => {
      const $active = $g("[data-active]");
      return getSlideIndex($active);
    }

    // @ts-ignore
    const getSlideIndex = ($slide) => {
      // @ts-ignore
      return [...$q(".carousel__item")].indexOf( $slide );
    }

    const prevSlide = () => {
      const index = getActiveIndex();
      const $slides = $q(".carousel__item");
      const $last = $slides[$slides.length-1];
      $last.remove();
      // @ts-ignore
      $list.prepend($last);
      activateSlide( $q(".carousel__item")[index] );
    }
    const nextSlide = () => {
      const index = getActiveIndex();
      const $slides = $q(".carousel__item");
      const $first = $slides[0];
      $first.remove();
      // @ts-ignore
      $list.append($first);
      activateSlide( $q(".carousel__item")[index] );
    }

    // @ts-ignore
    const chooseSlide = (e) => {
      const max = (window.matchMedia("screen and ( max-width: 600px)").matches) ? 5 : 8;
      const $slide = e.target.closest( ".carousel__item" );
      const index = getSlideIndex( $slide );
      if ( index < 3 || index > max ) return;
      if ( index === max ) nextSlide();
      if ( index === 3 ) prevSlide();
      activateSlide($slide);
    }

    // @ts-ignore
    const activateSlide = ($slide) => {
      if (!$slide) return;
      const $slides = $q(".carousel__item");
      $slides.forEach(el => el.removeAttribute('data-active'));
      $slide.setAttribute( 'data-active', true );
      $slide.focus();
    }

    const autoSlide = () => {
      nextSlide();
    }

    const pauseAuto = () => {
      // @ts-ignore
      clearInterval( auto );
      // @ts-ignore
      clearTimeout( pauser );
    }

    // @ts-ignore
    const handleNextClick = (e) => {
      pauseAuto();
      // @ts-ignore
      nextSlide(e);
    }

    // @ts-ignore
    const handlePrevClick = (e) => {
      pauseAuto();
      // @ts-ignore
      prevSlide(e);
    }

    // @ts-ignore
    const handleSlideClick = (e) => {
      pauseAuto();
      chooseSlide(e);
    }

    // @ts-ignore
    const handleSlideKey = (e) => {
      switch(e.keyCode) {
        case 37:
        case 65:
          // @ts-ignore
          handlePrevClick();
          break;
        case 39:
        case 68:
          // @ts-ignore
          handleNextClick();
          break;
      }
    }

    const startAuto = () => {
      auto = setInterval( autoSlide, 3000 );
    }

    startAuto();
    if ($next) $next.addEventListener( "click", handleNextClick );
    if ($prev)  $prev.addEventListener( "click", handlePrevClick );
// $list.addEventListener( "click", handleSlideClick );
    if ($list) $list.addEventListener( "focusin", handleSlideClick );
    if ($list) $list.addEventListener( "keyup", handleSlideKey );

  }
}
