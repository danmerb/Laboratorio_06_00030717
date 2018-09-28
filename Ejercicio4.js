


var suma = (array) => {
if (array.lenght%2==0){
    let num=Math.trunc(array.lenght%2)
    for (let i = 0; i <= num; i++) {
        let resta = array.lenght - i;
        let suma = array[i] + array[resta]; 
        console.log("La suma del "+ (i+1) +" + " +resta +" : "+suma);
    }
}
else {
    let num=Math.trunc(array.lenght%2)
    for (let i = 0; i <= num; i++) {
        let resta = array.lenght - i;
        let suma=0;
        if (array[i]==Math.round(array.lenght%2)){
            suma = array[i] + array[i];
            console.log("La suma del "+ (i+1) +" + " +resta +" : "+suma)
        }
        else{
            suma = array[i] + array[resta]; }
            console.log("La suma del "+ (i+1) +" + " +resta +" : "+suma)
        }
        

}
}     

