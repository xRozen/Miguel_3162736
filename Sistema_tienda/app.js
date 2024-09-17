//lista de productos disponibles en la tienda
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

//carrito de compras (arreglo vacio)
var carrito = [];

//funcion para mostrar el menu de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Agregar un producto a la lista\n";
    menu += (productos.length + 2) + ". Ver Carrito y Total\n";
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

//funcion para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

//funcion para agregar un producto a la lista
function agregarProducto() {
    var nombreP, precioP;

    // Repetir hasta obtener un nombre y precio válidos
    do {
        nombreP = prompt("Ingresa el nombre del producto que desea agregar: ");
        precioP = parseInt(prompt("Ingresa el precio del producto: "));

        if (!nombreP || isNaN(precioP)) {
            alert("El nombre o precio proporcionado no son válidos. Inténtalo de nuevo.");
        }
    } while (!nombreP || isNaN(precioP));

    // Agregar el producto a la lista si pasa las validaciones
    productos.push({ nombre: nombreP, precio: precioP });
    alert(`Producto "${nombreP}" agregado con éxito a la lista.`);
}


//funcion para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        alert(mensajeCarrito);
    }
}

//bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());

    //convertir la opción ingresada a un número
    opcion = Number(opcion);

    //verificar si la opción es válida
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        alert("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        //si la opción es valida y corresponde a un producto, agregar al carrito
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1){
        //si elige agregar un producto al carrito
        agregarProducto();
    } else if (opcion === productos.length + 2) {
        //si elige ver el carrito y el total
        mostrarCarritoYTotal();
    }
} while (opcion !== productos.length + 3); //el bucle continua hasta que elige Salir
alert("Gracias por visitar la tienda.");