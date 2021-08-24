//Script

class Productos {
  constructor(id, nombre, precio){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const productos = [];

productos.push (new Productos(1, "Fernet", 800));
productos.push (new Productos(2, "Cerveza", 145));
productos.push (new Productos(3, "Coca Cola", 100));
productos.push (new Productos(4, "Vino", 364));
productos.push (new Productos(5, "Whisky", 5000));

console.log(productos);

//DOM

for (const producto of productos){
  let div = document.createElement("div");
  div.innerHTML = `<h2>${producto.nombre}</h2>
                  <h3>${producto.precio}</h3>
                  <button id="${producto.id}" class="btnCompra">COMPRAR</button>`;
  document.body.appendChild(div);
}

//Botones

const botones = document.getElementsByClassName ('btnCompra');

console.log(botones);

//Carrito

const carrito = [];

function comprarProducto() {
  // id
  const seleccionado = productos.find(producto => producto.id == this.id);

  // asoc carrito
  carrito.push(seleccionado);

  

  let innerCarrito = '';
  for (const producto of carrito){
    innerCarrito += `<p>${producto.nombre} - ${producto.precio}</p>`
  }

  const divCarrito = document.getElementById("carrito");
  divCarrito.innerHTML = innerCarrito;

  console.log("Respuesta compra");  
}

for (const boton of botones) {
  boton.addEventListener("click", comprarProducto);
}

let compraHecha = document.getElementById("enviar");
compraHecha.addEventListener("click", compraLista);

function compraLista(e){
    e.preventDefault();
    alert("Gracias por la compra");    
}
