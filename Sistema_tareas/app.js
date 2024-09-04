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
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas:  \n";
        tareas.forEach((tarea, index)=>{
                
        });
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