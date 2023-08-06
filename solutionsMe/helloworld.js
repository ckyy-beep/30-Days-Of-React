const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  // let emptyArray = Array()
  // emptyArray.push('Suriname', 2022, 'Paramaribo', 'South America', 'Netherlands',
  //   'Dutch', 'Sranan Tongo', 'Sranan', 'Sranantongo', 'Surinamese', 'Surinamese dollar'
  //   )

  //   let index = emptyArray.indexOf('Trinidad')

  //   index != -1
  //     ? console.log('Is in the array:', emptyArray[index])
  //     : console.log('Not in the array.')

  // let oCount = 0;

  // for (let i = 0; i < countries.length; i++) {
  //   if(countries[i].includes('a')) {
  //     oCount++;
  //     if(oCount >= 2) {
  //       countries.splice(i, 1)
  //       oCount = 0
  //     }
  //   }
  // }

  // console.log(countries)

  document.getElementById("animeButton").addEventListener("click", function() {
    window.open("https://aniwave.to/home", "_blank");
  })

  const newArray = []

for (let i = 0; i < countries.length; i++) {
  let word = countries[i]
  let countAs = 0;

  for(let j = 0; j < word.length; j++) {
    if (word[j] === 'a') {
      countAs++
      if(countAs > 1){
        break
      }
    }
  }

  if (countAs <= 1) {
    newArray.push(countries[i])
  }
}

console.log(newArray)

