
const isValidDate =(date)=>{
  tableau=date.split("/")
  let day=tableau.getDate([0])
  let month =tableau.getf[1]
  let year= tableau[2]
let formaDate= new Date(`${day}-${month}-${year}`)
 month=formaDate.getMonth()+1
    if (month>=1 && month<=12) {
      return true
   }else {
   return false +
   ' car'+ month +'il n est pas un mois valide'
   }
  
}

 console.log(isValidDate('11/12/1322'))

//crier une fonction maxDaysInMonth
// verifier si les  jour son valide avec les mois
const maxDays=(datestring)=>{
let date =new Date(datestring) 
   let day = date.getDate()
   year = date.getFullYear()
   if (isValidDate(datestring)== year) {
      return true 
   }else if (day==date.getDate())
   {
      return true 
   }else{
      return false
   }

}
console .log(maxDays("30/02/2000"))