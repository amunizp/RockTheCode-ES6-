// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.
const suma = (a = 10, b = 5) => {
  var laSuma = a + b
  return laSuma
}
//?1.1 Ejecuta esta función sin pasar ningún parametro
console.log(suma())
//? 1.2 Ejecuta esta función pasando un solo parametro
console.log(suma(5))
//? 1.3 Ejecuta esta función pasando dos parametros
console.log(suma(3, 4))

//? 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}
var titulo = game.title
console.log(titulo)
var generos = game.gender
console.log(generos)
var año = game.year
console.log(año)

//? 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange']
;[fruit1, fruit2, fruit3] = fruits
console.log(fruit1, fruit2, fruit3)

//? 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}
var { name: nombre, race: raza } = animalFunction()
console.log(nombre, raza)
//? 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
//var name, itv =
const { name: name, itv: itv } = car
console.log(name, itv)
const [año1, año2, año3] = car.itv
console.log(año1, año2, año3)

//? 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const copiaPointsList = [...pointsList]
console.log(copiaPointsList)

//? 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const copiaToy = { ...toy }
console.log(copiaToy)

//? 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsList2 = [54, 87, 99, 65, 32]

const pointsListagregado = [...pointsList1, ...pointsList2]
console.log(pointsListagregado)
//?  3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toyFusion = { ...toy1, ...toyUpdate }
console.log(toyFusion)
//? 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const [color1, , ...otrosColores] = colors
const colorSinAzul = [color1, ...otrosColores]
console.log(colorSinAzul)

//? 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const nombres = users.map((user) => user.name)
console.log(nombres)

//? 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const nombresA = users
  .filter((user) => user.name.startsWith('A'))
  .map((item) => ({
    id: item.id,
    name: 'Anacleto'
  }))
//TODO igual podia hacerse mejor?
const nombresSinA = users.filter((user) => !user.name.startsWith('A'))

const cuatroPuntoDos = [...nombresSinA, ...nombresA]

//const nombresAnacletados = nombresMod.map(nombre => nombre.startsWith('A') = "Anacleto")

console.log(cuatroPuntoDos)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const SitioVisitado = cities.filter((city) => city.isVisited)
console.log(SitioVisitado)
const listaSitioVisitado = SitioVisitado.map(
  (visita) => visita.name + ' Visitado'
) //esta cojiendo el objeto entero tengo que cojer solo el nombre
console.log(listaSitioVisitado)

//? 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const mayorEdad = ages.filter((age) => age > 18)
console.log(mayorEdad)
//? 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
//const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const pares = ages.filter((numero) => numero % 2 === 0)
console.log(pares)
//? 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const leyendsNeverDie = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(leyendsNeverDie)

//? 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
const nombresConU = streamers.filter((streamer) => streamer.name.includes('u'))
console.log(nombresConU)

//? 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const listaCincoPuntoCinco = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
  .map(function (streamer) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return streamer
  })
console.log(listaCincoPuntoCinco)

//? 5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
const buscador = document.querySelector('input')
buscador.placeholder = 'Buscando streamers'
buscador.addEventListener('input', (ev) => {
  streamersFiltrados = streamers.filter((streamer) =>
    streamer.name.includes(ev.target.value)
  )
  console.log(streamersFiltrados)
})

//? 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43]
const cien = numbers.find((element) => element === 100)
console.log(cien)

//? 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
]
const peli2010 = movies.find((movie) => movie.date === 2010)
console.log(peli2010)

//? 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
]
const mutations = [
  {
    name: 'Porompompero',
    description:
      'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  },
  {
    name: 'Fly me to the moon',
    description: 'Permite volar, solo y exclusivamente a la luna'
  },
  {
    name: 'Andando que es gerundio',
    description: 'Invoca a un señor mayor como Personal Trainer'
  }
]

const elMutante = mutations.find((element) => element.name === 'Porompompero')
console.log(elMutante)

aliens.find((element) => element.name === 'Cucushumushu').mutation = elMutante
console.log(aliens)

//?7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
//los alumnos usando la función .reduce().

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const elSumaNotas = exams
  .map((element) => element.score)
  .reduce((accumlator, currentValue) => accumlator + currentValue)
console.log(elSumaNotas)

//? 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función .reduce().
const elSumaAprobados = exams
  .filter((element) => element.score >= 5)
  .map((element) => element.score)
  .reduce((accumlator, currentValue) => accumlator + currentValue)

console.log(elSumaAprobados)

//? 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const notaMedia = elSumaNotas / exams.length
console.log(notaMedia)

// ? 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]

const rpg = videogames.filter(
  (element) => element.genders.find((genero) => (genero = 'RPG')) === 'RPG'
)
console.log(rpg)
const mediaRPG =
  rpg
    .map((element) => element.score)
    .reduce((accumlator, currentValue) => accumlator + currentValue) /
  rpg.length

console.log(mediaRPG)

//? 9 Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por
// consola el array de categorías. Ten en cuenta que las categorías no deberían
// repetirse.

// Para filtrar las categorías puedes ayudarte de la función .includes().

const pelis = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
var categoriaPelis = new Set()
for (const peli of pelis) {
  for (const categoria of peli.categories) {
    console.log(...peli.categories)
    categoriaPelis.add(categoria)
  }
}
console.log([...categoriaPelis])

//? 10 Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.

const usuarios = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
var totalVolume = 0
var volumeCount = 0
for (const usuario of usuarios) {
  for (const sound in usuario.favoritesSounds) {
    for (const soundproperty in usuario.favoritesSounds[sound]) {
      if (soundproperty === 'volume') {
        totalVolume += usuario.favoritesSounds[sound][soundproperty]

        volumeCount += 1
      }
    }
  }
}
console.log(`la media de todos los volumenes es ${totalVolume / volumeCount}`)

//? 11 Dado el siguiente javascript usa forof y forin para saber cuantas veces ha
// sido cada sonido agregado por los usuarios a favorito.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
// vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a
// la vez un buen reto y oportunidad para comprender que hay muchas formas de
// hacer las cosas en javascript.

// const users = [
//   {
//     name: "Alberto",
//     favoritesSounds: {
//       waves: { format: "mp3", volume: 50 },
//       rain: { format: "ogg", volume: 60 },
//       firecamp: { format: "mp3", volume: 80 },
//     },
//   },
//   {
//     name: "Antonio",
//     favoritesSounds: {
//       waves: { format: "mp3", volume: 30 },
//       shower: { format: "ogg", volume: 55 },
//       train: { format: "mp3", volume: 60 },
//     },
//   },
//   {
//     name: "Pedro",
//     favoritesSounds: {
//       shower: { format: "mp3", volume: 50 },
//       train: { format: "ogg", volume: 60 },
//       firecamp: { format: "mp3", volume: 80 },
//     },
//   },
//   {
//     name: "Cristina",
//     favoritesSounds: {
//       waves: { format: "mp3", volume: 67 },
//       wind: { format: "ogg", volume: 35 },
//       firecamp: { format: "mp3", volume: 60 },
//     },
//   },
// ];

//primero crear la lista.
//TODO es muy intenso hacer dos for in? igual es mejor hacerlo de una vez?
var frecuencias = new Set()
for (const usuario of usuarios) {
  for (const sound in usuario.favoritesSounds) {
    frecuencias.add(sound)
  }
}
//TODO esto lo tuve que buscar online. clave es "Array.from()"
const once = Object.assign(...Array.from(frecuencias, (v) => ({ [v]: 0 })))
console.log(once)
for (const usuario of usuarios) {
  for (const sound in usuario.favoritesSounds) {
    if (once.hasOwnProperty(sound)) {
      console.log('te pille')
      once[sound] += 1
    }
  }
}
console.log(once)

//? Ejercicio 12 Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
function findArrayIndex(listaTextos, texto) {
  console.log(
    `${busca} esta en la posicion número ${
      listaTextos.findIndex((element) => element === texto) + 1
    } de la lista de textos`
  )
  return listaTextos.findIndex((element) => element === texto)
}

// Ej array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
const busca = 'Anakin'

var posicion = findArrayIndex(mainCharacters, busca)
console.log(posicion)
//? 13 Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

function removeItem(listaTextos, texto) {
  var posicion = findArrayIndex(listaTextos, texto)
  return listaTextos.toSpliced(posicion, 1)
}
console.log(removeItem(mainCharacters, 'Anakin'))
console.log(removeItem(mainCharacters, 'Obi-Wan'))

//? 14 Crea una función llamada rollDice() que reciba como parametro el numero de caras
// que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te
// preocupes! Busca información sobre la función de javascript Math.random()
function rollDice(number) {
  return Math.floor(Math.random() * number)
}
const dado = rollDice(6)
console.log(dado)

//? 15
// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(array1, index1, index2) {
  var tempArray = [...array1]
  item1 = tempArray[index1]
  item2 = tempArray[index2]
  //tempArray.toSpliced(index1, 0)

  if (
    index1 > array1.length - 1 ||
    index2 > array1.length - 1 ||
    index1 === index2
  ) {
    console.log(
      `choose a number that is less than the  ${array1.length} and make sure they are different if they are the same there is no point`
    )
  } else {
    tempArray.splice(index2, 1, item1)
    tempArray.splice(index1, 1, item2)
    //const item = tempArray.splice(index1, index2)[0]
    //tempArray.splice(index2, 0, item)
    //tempArray = tempArray.concat(tempArray.splice(index1, index2))
  }
  return tempArray
}
console.log('lista original  ' + fantasticFour)
reOrdenado = swap(fantasticFour, 1, 2)
reOrdenado = swap(fantasticFour, 2, 1)
reOrdenado = swap(fantasticFour, 0, 3)

console.log('Lista reordenada ' + reOrdenado)
