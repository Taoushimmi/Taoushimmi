
const giveNumber = () => {
const numero = prompt('choisisez votre numero entre 0 et 50') 
return numero
}

  
const didIWin= (givenNumber) =>{
  
     if  (givenNumber < 50)  {
       alert 
        (" plus grand") ;
           return  false ;
    } else if (givenNumber > 50) {
       alert 
       (" plus petit");
        return false;
    } else
        alert 
       ("Bravo! Vous avez devinez le nombre") ;
       return true
}




const gamePLAY= ()=>{ 
    

        (didIWin(giveNumber))
}


 gamePLAY() 