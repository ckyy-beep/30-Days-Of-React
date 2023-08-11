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

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.findIndex(item => item === 'Honey'), 1)
console.log(shoppingCart)