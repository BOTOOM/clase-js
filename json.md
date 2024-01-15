# JSON Y OBJETOS

**Contenido**

- [que es](#que-es-json-y-que-son-objetos)
- [crear un objeto](#crear-un-objeto)
- [propiedades](#propiedades-llaves-de-los-objetos-y-json)
- [diferencia entre objeto y json](#diferencia-entre-objeto-y-json)
- [objetos anidados](#objetos-anidados)
- [las propiedades mantienen sus metodos](#)
- [](#)
- [](#)

## que es json y que son objetos

JSON siendo las siglas de Javascript object notacion es una forma en la cual se puede escribir un conjunto de datos de javascript lo cuales puedes ser usados por el mismo frontend , usados para comunicarse con el back con el fin de realizar la comunicacion de informacion compleja de forma organizada. Adicionalmente esta notacion esta hecha para que sea de facil lectura para el humano

ahora al buscar json u objeto en las documentaciones se puede encontrar que se ven muy similares. entonces cual es la diferencia. que JSON es una formato. y como formato debe de seguir ciertas reglas pero los objetos tambien se pueden ver u escribir con formato JSON. se que esto puede sonar confuso pero me remitire a ejemplos.

primero veamos que es un objeto: un objeto es una colección de pares clave-valor. La clave es siempre una cadena y debe ser única en la colección. El valor puede ser una primitiva, un objeto o incluso una función. la clave en algunos casos tambien llamada `llave` o `key` es por asi decirlo el nombre de una `"variablw"` donde guardaremos algo.

siempre puede reconocer si algo es un objeto o json por que va a encontrar que esa variable inicia y finaliza con `{}`

## crear un objeto

para crear un objeto hay unas cuantas formas mostrare 3 pero la mas usada es la primera:

```javascript
// 1
const car = {};
// 2
const car = new Object();
// 3
const car = Object.create({});
```

## propiedades (llaves) de los objetos y JSON

las propiedades en los objetos y los JSON son la informacion que pueden guardar la diferencia entre ambos es que un objeto puede tener funciones dentro de sus propiedades y el JSON no

### acceder a propiedades

```javascript
const car = {
  marca: "BMW",
};
```

en este ejemplo el objeto es `car` y tiene una propiedad o llave llamada `marca` con esta propiedad o llave yo puedo acceder al valor que contiene y para acceder a una propiedad yo puedo usar

```javascript
// nombreObjeto.propiedad
console.log(car.marca); // BMW
```

tambien yo puedo acceder a las propiedades usando `['nombre de la propiedad']` esta forma se usa como alternativa de acceder a una propiedad dado que me permite con un string acceder a la propiedad estome permite incluso dinamismo.

```javascript
// nombreObjeto['propiedad']
console.log(car["marca"]); // BMW
```

### Crear propiedades

puede inicialmente crear un objeto vacio como ya vimos anteriormente y puedes crearlo con las propiedades que quieras. entre estas propiedades puedes crear propiedades de tipo:

- string
- number
- boolean
- Array
- Object
- null
- function **(solo disponible para objetos mas no para JSON)**
- Dates **(solo disponible para objetos mas no para JSON)** **se puede en json si se convioerte a string**

siempre cada propiedad debe estar separada por una coma `,`

un ejemplo de un objeto con varios de estos tipo podria ser:

```javascript
const persona = {
  nombre: "Edwar Diaz", // tambien funciona con ' ' y  ``
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};
```

ta teniendo un objeto creado podemos crearle mas propiedades en el transcurso de la ejecucion de nuestro codigo y para hacerlo como si asignaramos una variables

```javascript
const persona = {
  nombre: "Edwar Diaz", // tambien funciona con ' ' y  ``
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};

// creando una nueva propiedad llamada "nacionalidad"
persona.nacionalidad = "Colombia";
// si yo impromo el resultado de esto justo despues de esta linea obtendre
console.log(persona); // {
//   nombre: "Edwar Diaz",
//   edad: 27,
//   saldo: 1000000,
//   cansado: false,
//   idiomas: ["ingles", "español", "frances"],
// }

// incluso puedo acceder a la propiedad persona ya que ha sido creada
console.log(persona.nacionalidad);
// tambien funcionaria si uso:
persona["nacionalidad"] = "Colombia";
```

tiene que tener en cuenta que si intenta acceder a la variable antes de crearla recibira un undefined

```javascript
const persona = {
  nombre: "Edwar Diaz", // tambien funciona con ' ' y  ``
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};

// incluso puedo acceder a la propiedad persona ya que ha sido creada
console.log(persona.nacionalidad); // undefined

// creando una nueva propiedad llamada "nacionalidad"
persona.nacionalidad = "Colombia";
```

ahora puede que necesites crear propuedades de mas de una palabra como por ejemplo `fecha de nacimiento` si quiero crear una propiedad con ese nombre puedo usar

```javascript
persona.fechaNacimiento = "17/07/1996";
persona.fecha_nacimiento = "17/07/1996";
persona["fecha nacimiento"] = "17/07/1996";
const persona = {
  nombre: "Edwar Diaz"
  "fecha nacimiento": "17/07/1996"
};

// si tiene espacios como los ultimos ejemplos solo puedo acceder usando
console.log(persona["fecha nacimiento"])

```

### editar propiedades de los JSON y Objetos

similar a como se editar o se le asigna un nuevo valor a una variables en JS tambien lo podemos hacer con los objetos

```javascript
const persona = {
  nombre: "Edwar Diaz", // tambien funciona con ' ' y  ``
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};

persona.nombre = "Edwar Diaz Ruiz";
```

### eliminar propiedades

en caso que necesite purgar un json de variables que no necesito procesas o enviar hacia el back puedo eliminarlas:

```javascript
const persona = {
  nombre: "Edwar Diaz", // tambien funciona con ' ' y  ``
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};

delete persona.saldo;
// justo despues de esa linea ya se ha borrado la propiedad
```

## diferencia entre objeto y JSON

JSON es un formato por lo cual tambien se puede crear archivos con terminacion `.json` en estos archivos se puede guardar informacion para la aplicacion. pero cual es la diferencia en javascript? que en javascript un json convencionalmente seguiria la estructura de un json

[estructura](https://www.json.org/json-en.html)

es decir que en un ejemplo de diferencia seria

```javascript
/// objeto
const persona = {
  nombre: "Edwar Diaz",
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};

/// json
const persona = {
  nombre: "Edwar Diaz",
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
};
```

## objetos anidados

como se menciono antes se pueden tener objetos dentro esto permite poder alamenar mas informacion y organizarla por ejemplo:

```javascript
/// objeto
const persona = {
  nombre: "Edwar Diaz",
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
  veiculo: {
    marca: "BMW",
    color: "plateado",
    kilometraje: 1567,
    averiado: false,
    tecnomecanica: {
      expedicion: "10/10/2023",
      expiracion: "10/10/2024",
    },
  },
};
```

si yo quiero acceder a las propiedades usaria `.` o `[]` hasta llevar a la propiedad deseada por ejemplo

```javascript
console.log(persona.veiculo) // aqui obtendia un objeto o json con lo que esta en "veiculo"
console.log(persona.veiculo.marca) // BMW
console.log(persona.veiculo['marca']) // BMW
console.log(persona.veiculo.tecnomecanica.expedicion) // 10/10/2023
console.log(persona.veiculo.tecnomecanica.['expedicion']) // 10/10/2023
console.log(persona.veiculo['tecnomecanica']['expedicion']) // 10/10/2023

// asi mismo puedo cambiar el valor

persona.veiculo.tecnomecanica.expedicion = "01/01/2024"

```


# las propiedades mantienen sus metodos
las propiedades de un json tienen sus metodos normales de JS y esto que quiere decir. que si una propuedad es de tipo string puede tener todos los metodos de in string asi mismo si es tipo Date o array. por ejemplo

```javascript
/// objeto
const persona = {
  nombre: "Edwar Diaz",
  edad: 27,
  saldo: 1000000,
  cansado: false,
  idiomas: ["ingles", "español", "frances"],
  veiculo: {
    marca: "BMW",
    color: "plateado",
    kilometraje: 1567,
    averiado: false,
    tecnomecanica: {
      expedicion: "10/10/2023",
      expiracion: "10/10/2024",
    },
  },
};

console.log(persona.nombre,split(" ")) // ["Edwar", "Diaz"] ... esto no afecta a la propiedad
console.log(persona.idiomas) // 
```

fechas en los objetos (en json seria en string)

arrays dentro de los objetos

array de objetos

metodos de json

visualizacion de json comoda

converitr a string

objetos padados como referencia

clonacion de objetos

objetos pasados como parámetros y retornados

los objetos con metodos
