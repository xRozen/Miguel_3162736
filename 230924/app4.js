function tablas(){
    for(i=1; i<=10; i++){
        console.log("Tabla del " + i)
        for(j=1; j<=10; j++)
            console.log(`${i} x ${j} = ${i*j}`);
    }
}
tablas()