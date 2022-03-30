import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productos = JSON.parse(sessionStorage.getItem('products') || '[]').filter((p:any)=>p.estado);
  constructor() { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: any) {
    console.log(producto)
    let dataLocal: Array<any> = JSON.parse(sessionStorage.getItem('checkout') || '[]');
    if(dataLocal.length > 0) {
      if(dataLocal.findIndex(p=> p.id == producto.id) != -1) {
        dataLocal = dataLocal.map(p => {
          if(p.id == producto.id) {
            p.cantidad = p.cantidad+1;
          }
          return p;
        });
      }else {
        dataLocal.push({...producto, cantidad: 1 });
      }    
    }else {
      dataLocal.push({...producto, cantidad: 1 });
    }
    sessionStorage.setItem('checkout', JSON.stringify(dataLocal));
  }

}
