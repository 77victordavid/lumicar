import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    'https://images.philips.com/is/image/PhilipsConsumer/11972UE2X2-IMS-es_CO?$jpglarge$&wid=600', 
    'https://images.philips.com/is/image/PhilipsConsumer/11972U50CWX2_40-IMS-es_CO?$jpglarge$&wid=600',
    'https://images.philips.com/is/image/PhilipsConsumer/18952C2-IMS-es_CO?$jpglarge$&wid=600'
  ];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  interval = 2000;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    
  }
  
}
