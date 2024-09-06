//arreglo para poder almacenar tareas
let tareas = [];

//funcion para mostrar opciones
function mostrarMenu(){
    return parseInt(prompt(`
    "Opcion disponibles"
    1.- Agregar tarea
    2.- Ver todas las tareas
    3.- Marcar mis tareas como completadas
    4.- Salir
    `));
}

//funcion para agregar tarea
/**
Esta funcion se encarga de agregar una tarea a la lista de tareas, el valor
ingresado se guarda en la variable "nombre". Si la variable contiene un valor
se ejecutara el bloque if, el cual crea un objeto llamado "tarea" con dos
propiedades, las cuales seran el nombre que se ingreso y un valor booleano 
inicializado en "false". Despues este objeto sera agregado al arreglo "tareas"
y se mostrara un mensaje donde se indica que la tarea fue agregada
satisfactoriamente; si por el contrario, la variable nombre esta vacia, se
ejecutara el bloque del else, donde se mostrara un mensaje advirtiendo que 
el nombre de la tarea no puede estar vacio.
*/
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada satisfactoriamente");
    }else{
        alert("Nombre de la tarea no puede estar vacio");
    }
}

//funcion para ver las tareas
/**
Esta funcion se encarga de mostra la lista de tareas que se han agregado,
primero se verifica la longitud del arreglo "tareas", si es igual a cero
se mostrara un mensaje advirtiendo que no hay tareas en la lista, de lo
contrario se mostrara una ventana emergente donde se podra visualizar
la lista de las tareas que han sido agregadas. Mediante un foreach se
recorre el arreglo "tareas", en cada iteracion a cada elemento se le va 
asignando un indice, el cual tiene el nombre de la tarea y su estatus
(completada o pendiente), cada uno de estos se van agregando a la variable
"mensaje",la cual al final de utilizara para mostrar la lista de tareas en 
una ventana emergente.
*/
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas:  \n";
        tareas.forEach((tarea, index)=>{
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completada? "Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

//funcion para marcar tarea completada
/**
Esta funcion se encargara de marcar una tarea como completada, el usuario ingresa
un numero el cual representa el numero de tarea en la lista que se marcara como
completada, se verifica si el numero ingresado esta en el rango de cero al tamaño
de la lista, se le resta uno al numero ingresado ya que los indices de los arreglos
comienzan desde cero, asi se asegura que se selecciono la tarea correcta y se evitan
errores, despues se muestra un mensaje utilizando el nombre de la tarea que se
selecciono advitiendo que ha sido marcada como completada, por el contrario,
si el numero ingresado no cumple con la codicion, se mostrara un mensaje de que el 
numero de la tarea no es valido. 
*/
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduzca el numero para marcar la tarea como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero - 1].completada = true;
        alert(`La tarea ${tareas[numero - 1].nombre} ha sido completada`);
    }else{
        alert("Numero de tarea no valido (Fuera de rango)");
    }
}

//funcion principal para manejar el programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intentar nuevamente");
        }
    }
    alert("Programa finalizado");
}
iniciarPrograma();