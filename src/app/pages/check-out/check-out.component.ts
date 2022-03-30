import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor() { }
  productos: any = [];
  total = 0;
  ngOnInit(): void {
    this.productos = JSON.parse(sessionStorage.getItem('checkout') || '[]');
    this.getTotal();
  }
  getTotal() {
    this.total = this.productos.reduce((total: any, valorActual: any) => total + (valorActual.cantidad * valorActual.precio), 0);
  }
  removeProduct(producto: any) {
    this.productos = this.productos.filter((p: any)=> p.id !== producto.id );
    sessionStorage.setItem('checkout', JSON.stringify(this.productos));
    this.getTotal();
  }

}
