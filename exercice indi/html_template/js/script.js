const sum1=( num)=>{
return num.reduce((a,b)=>a+b)
}
console.log (sum1([1,2,3,4]))
const sum2=(array)=>{

if (array.length===0){
    return 0
}else{
  return array[0]+sum2(array.slice(1))
}
}
console.log (sum2([5,5,9]))
const factorial =(n)=> {
    // Si n est égal à 0, la factorielle sera 1
    if (n === 0) {
        return 1;
    }
    // Faire un appel récursif
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
const fibonacci =(nmbr)=>{
if (nmbr <2){
    return nmbr;
}
return fibonacci(nmbr-1) +
fibonacci(nmbr-2);
}
console.log(fibonacci(8))