export interface Product {
    
    id: number;
    title: string;
    description: string;
    pictureUrl: string;
    quantity: number;
    unitPrice: number;

}

export const products= [{
    id: 1111,
    title: 'iPhone 14 Pro',
    description: 'Dispositivo móvil de Tienda e-commerce',
    pictureUrl: 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Max_Deep_Purple_phonewall?$ProductBase$',
    quantity: 1,
    unitPrice: 699
  }
]




// ★ ID: ingresa 4 dígitos numéricos.
// ★ Nombre del Producto: Nombre del producto seleccionado del carrito del
// ejercicio.
// ★ Descripción del Producto: “Dispositivo móvil de Tienda e-commerce”
// ★ URL Imagen: Foto del producto seleccionado. (url válida)
// ★ Cantidad: 1
// ★ Precio: Mayor a 1 USD
