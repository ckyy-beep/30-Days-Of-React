// let num = 3;

// if (num > 0) {
//     console.log(`${num} is a positive number`)

// }

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
//   }
  
//   for (const key in user) {
//     console.log(key, user[key])
//   }

//scope.js
// a = 'JavaScript' // is a window scope this found anywhere
// b = 10 // this is a window scope variable
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible

// function letsLearnScope() {
//     var gravity = 9.81
//     console.log(gravity)
//   }
//   // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
//   if (true) {
//     var gravity = 9.81
//     console.log(gravity) // 9.81
//   }
//   console.log(gravity) // 9.81
  
//   for (var i = 0; i < 3; i++) {
//     console.log(i) // 1, 2, 3
//   }
//   console.log(i)

//   const rectangle = {
//     length: 20,
//     width: 20,
//   }
//   console.log(rectangle) // {length: 20, width: 20}
  
//   const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js',
//     ],
//     isMarried: true,
//   }
//   console.log(person)

const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))