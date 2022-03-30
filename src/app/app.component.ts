import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators'
import { productos } from 'src/constants/productos.constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lumicar';
  showClient = true;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    console.log(this.router.url);
    sessionStorage.setItem('products', JSON.stringify(productos));
    this.route.url.subscribe((res)=> console.log(res));
    this.router.events.pipe(filter(event=> event instanceof NavigationEnd)).subscribe((res: any) => {
      if(res.url == '/dashboard') {
        this.showClient = false;
      }else {
        this.showClient = true;
      }
    });
  }

}
