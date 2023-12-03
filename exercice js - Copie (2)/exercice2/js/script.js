
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
    

        let numberDeviner = Math.floor(Math.random() * 51);
        let attente = 0;
    
        while (true) {
            let userGuess = giveNumber();
            attente++;
    
            if (didIWin(userGuess, numberDeviner)) {
                break; 
            }
        }
        alert(`Bravo ! Vous avez deviné le nombre en ${attente} tentatives.`); 
}


 gamePLAY() 