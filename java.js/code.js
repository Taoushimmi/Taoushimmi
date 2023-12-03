
/*const addKdo=(kdo)=>{
sapin.push(kdo)
return sapin
}
/*addKdo('telephone')
addKdo('doudou')

console.log(sapin)
*/
const sapin =[]

const enfant= (sage)=>{ 
if (sage){
sapin.push('telephone')}
    if(!sage ){
  sapin.push('livre')
        
    }}
    enfant(false)
    console.log(sapin)
    


 //let exos = [
    `// si l'enfant a la moyenne de 12 il aura des cadeaux,
    // sinon un cadeau, si il a moins de 12 il n'aura pas de cadeau.`,
    `Enoncé 2 : écrivez une condition qui permet à l'enfant d'avoir un cadeau en plus s'il est sage.
    S'il n'a pas été sage, tous les cadeaux disparaissent du tableau.`,
    `Écris une fonction bruleSapin qui remplace la valeur du tableau sapin par la chaine de caracteres :fire:`,
    `si l'enfant n'a pas été sage, remplacer "téléphone" par "livre"`,
    `créer une fonction qui prend en paramètre un objet "série" {titre :   , nombre de saisons :   , durée d'un épisode :   }
    et qui affiche "trop long" si la durée d'un épisode dépasse 45 min`,
    `Si Matthieu n'est pas sage on lui retire un cadeau
    S'il est sage on lui en donne trois
    Le nombre de cadeau devant être limité à 10`,
];

// Cette fonction choisi un exercice aléatoirement dans le tableau exo et retourne
// l'énoncé
// chooseExo() {
/*    return exos[Math.floor(Math.random() * exos.length)];
}

console.log(chooseExo());
*/
