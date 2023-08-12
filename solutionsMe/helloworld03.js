// let text = webTechs.toString()
// console.log(text)

// let words = text.split(',')
// console.log(words)
// console.log(words.length)


// let text02 =
//      'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words02 = text02.split(' ')

// console.log(words02)
// console.log(words02.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.splice(shoppingCart.findIndex(item => item === 'Honey'), 1)
// console.log(shoppingCart)
// let indexOftea = shoppingCart.findIndex(item => item === 'Tea')
// shoppingCart.splice(indexOftea, 1, 'Grean Tea')
// console.log(shoppingCart)



// countries.includes('Ethiopia') 
//     ? console.log('ETHIOPIA')
//     : countries.push('Ethiopia')
//     console.log(countries)

// webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullstack = frontEnd.concat(backEnd)
// console.log(fullstack)

//ages.sort()
ages.sort((a, b) => a - b);
console.log(ages)

console.log('Youngest age:', ages[0])
console.log('Eldest age:', ages[ages.length - 1])

if (ages.length % 2 === 0) {
    let total = ages[(ages.length/2)-1] + ages[(ages.length/2)]
    console.log('middle age:', total/2)
} else {
    let middleAge = ages[Math.floor(ages.length/2)]
    console.log('middle age:', middleAge)
}

let totalAge = 0;
for(let i = 0; i<ages.length; i++) {
    totalAge += ages[i]
}
console.log('average age:', totalAge/ages.length)






