let  = "Perdita 8 10 8"
//let parametre="client: start: duration: price:"
function parseTrips(trip) {
    let tripobject={}
 mots = trip.splite(' ')
   
for (i=0; i<mots.length;i++){
    let mot=trip[i]
    if (tripobject[mot]){
        tripobject[mot]++;
    }else{
        tripobject[mot]=mots
    }
}

return tripobject
}

 const trip="client: start: duration: price:"
console.log(parseTrips(trip))