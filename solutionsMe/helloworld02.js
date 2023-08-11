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
    'Python',
    'Rust'
]

const middleIndex = webTechs.length % 2 === 0 ? Math.floor(webTechs.length/2) - 1 : Math.floor(webTechs.length/2)

webTechs.splice(middleIndex, webTechs.length % 2 === 0 ? 2 : 1)

console.log(webTechs)

webTechs.splice(0, webTechs.length)
console.log(webTechs)


 