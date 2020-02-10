const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
];

console.log("Print each car");
allCars.forEach(car => {
  console.log(car);
});

console.log("Print values of each car");
allCars.forEach(car => {
  const vals = Object.values(car);
  console.log(vals);
})

console.log("Print keys of each car");
allCars.forEach(car => {
  const keys = Object.keys(car);
  console.log(keys);
})

console.log("Print keys and values of each car");
allCars.forEach(car => {
  const keys = Object.keys(car);

  for (const key of keys) {
    const val = car[key];
    console.log(key);
    console.log(val);
//    console.log(`${key}: ${car[key]}`);
  }

  console.log("-------------");
});

console.log("Alternative - Print keys and values of each car");
allCars.forEach(car => {
  const props = Object.entries(car);

  console.log(props);
});