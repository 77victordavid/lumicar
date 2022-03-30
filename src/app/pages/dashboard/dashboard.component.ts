import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productos: Array<any> = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('login')== 'false') {
      this.router.navigate(['home']);
    }
    this.productos = JSON.parse(sessionStorage.getItem('products')||'[]');
  }
  changeInput(producto: any, event: any) {
    this.productos = this.productos.map(p => {
      if(p.id == producto.id) {
        p.estado = event.target.checked;
      }
      return p;
    });
    sessionStorage.setItem('products', JSON.stringify(this.productos));
    console.log(producto, event);
  }

  cerrarSesion() {
    sessionStorage.setItem('login', 'false');
    this.router.navigate(['home']);
  }
}
