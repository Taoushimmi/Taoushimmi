function parsetrip (trip){
    let listTrip=trip.split(" ") // la liste des client 
      return {
        client:listTrip[0],
        depart:parseInt(listTrip[1]),
        duree:parseInt(listTrip[2]),
        prix: parseInt(listTrip[3])
    }
    
}
trip = 'perdita 8 10 8'
console.log (parsetrip(trip))


let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

 const voyages=(tripsToParse)=>{
        trips=tripsToParse.map((trip)=>{// crier un nv tableau 
         let parts =trip.split(' ')
         return{
            client:parts[0],
            depart:parseInt(parts[1]),
            duree:parseInt(parts[2]),
            prix: parseInt(parts[3])
    }
   
    })
    return trips
 }
     let clients=(voyages(tripsToParse))
  console.log (clients)

 tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"]


  const getTripsPrice=(trips)=>{
     let prixtotal=0
   for (let trip of trips){
    prixtotal+=trip.prix
   }
   return prixtotal
  }
     trips=clients
  console.log (getTripsPrice(trips))

  
  let tripA= { client: 'Roger', depart: 0, duree: 5, prix: 10 };
  let tripB= { client: 'Perdita', depart: 8, duree: 10, prix: 8 };
  const checkCompatibility=(tripA, tripB)=>{
   
   if(tripA.depart !== tripB.depart){
    return false;
   } else if (tripA.depart =< tripB.depart) {
    return true
   };

  }
  console.log(checkCompatibility(tripA,tripB))