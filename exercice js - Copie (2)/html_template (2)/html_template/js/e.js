function getVillainName(birthday) {
    const firstNames = [
      "The Evil",
      "The Vile",
      "The Cruel",
      "The Trashy",
      "The Despicable",
      "The Embarrassing",
      "The Disreputable",
      "The Atrocious",
      "The Twirling",
      "The Orange",
      "The Terrifying",
      "The Awkward"
    ];
  
    const secondNames = [
      "Mustache",
      "Pickle",
      "Hood Ornament",
      "Raisin",
      "Recycling Bin",
      "Potato",
      "Tomato",
      "House Cat",
      "Teaspoon",
      "Laundry Basket"
    ];
  
    const firstName = firstNames[birthday.getMonth()];
    const secondName = secondNames[birthday.getDate() % 10];
  
    return firstName + secondName;
  }
console.log(getVillainName())  