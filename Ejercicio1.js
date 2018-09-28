var ocurrencia=(numero, array)=>{
    let cont=0;
    
    for ( let i of array){
        if (i===numero){
            cont++;
        }
    }
    let total=console.log("Se encontraron " + cont+ " elementos")
    return total;

}