import { Component, ViewChild  } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class SliderPage {
	swiper:any;
	@ViewChild('slider') slider: Slides;
	slidesOptions = { initialSlide: 0 }

	constructor(
		public navCtrl: NavController) {
	}

	slideNext(){
		this.slider.slideNext();
	}

	slidePrev(){
		this.slider.slidePrev();
	}

	onSlideNext(slider) {
		if (slider.isEnd()) {
			this.navCtrl.push(HomePage);
		}
	}

}
