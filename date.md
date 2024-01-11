# Dates - fechas

Los dates son objetos de javascript con los cuales podemos manejar datos de tiempo o fechas.

la forma de crear un Date es :

```javascript
const fecha = new Date()
```

el ejemplo anterior mostrara la fecha actual y dependiendo del sistema la mostrara en la zona horaria del navegador o en UTC 0. pero normalmente es en la zona horaria del nnavegador


```javascript
const fecha = new Date()
console.log(fecha) // resultado frecuente:
// Thu Dec 28 2023 17:28:05 GMT-0500 (hora estándar de Colombia)

// otro posible resultado obtenido de codepen
// "2023-12-28T22:27:38.941Z"
```

las fechas en javascript se consideran una marca de tiempo, es decir que cuando se usa `new Date()` javascript toma una marca de tiempo del momento exacto en que se ejecuto esa linea de codigo ingluyendo milisegundos.

Teniendo en cuenta que es una marca de tiempo javascript internamiente entiende las fechas como la cantidad de milisegundos que han pasados desde el 1 de enero de 1970

al usar `new Date()` se obtiene la fecha actual pero como hacemos para decirle a javascript que una variable debe de tener una fecha diferente ya sea pasada o futura?. como por ejemplo para una aplicacion de calendario.

## Creacion de fechas propias

si queires decirle a javascript que cree un Date con una fecha especifica debes de ingresarun parametro en `Date()`

javascript tiene un buen sistema de fechas y puedes transformar string y numeros para crear fechas. esto lo haceun poco facil en algunos casos y un poco dificil en otros.

> **hay 4 formas de crear fechas**


la primera es sin ingresar ningun parametro


### 2 crear fechas usando strings

segun cuan especifico seas javascript hara todo lo posible para convertir tu string en una fecha.

la parte buena de esto es que entiende diversos formatos de fechas como se ve acontinuacion.


```javascript
new Date('2018-07-22')
new Date('2018-07') //July 1st 2018, 00:00:00
new Date('2018') //Jan 1st 2018, 00:00:00
new Date('07/22/2018')
new Date('2018/07/22')
new Date('2018/7/22')
new Date('July 22, 2018')
new Date('July 22, 2018 07:22:13')
new Date('2018-07-22 07:22:13')
new Date('2018-07-22T07:22:13')
new Date('25 March 2018')
new Date('25 Mar 2018')
new Date('25 March, 2018')
new Date('March 25, 2018')
new Date('March 25 2018')
new Date("October 13, 2014 11:13:00");
new Date('March 2018') //Mar 1st 2018, 00:00:00
new Date('2018 March') //Mar 1st 2018, 00:00:00
new Date('2018 MARCH') //Mar 1st 2018, 00:00:00
new Date('2018 march') //Mar 1st 2018, 00:00:00

// ISO DATE FORMAT
new Date("2015-03-25T12:00:00Z");
```

hay que tener cuidado con la posicion de mes y el dia por que existe la posibilidad que confunda el mes y el dia

> Tambien se pueden usar zonas horarias lo que se vera mas adelante

```javascript
const fecha = new Date('01/07/2010'); // "2010-01-07T05:00:00.000Z"
const fecha = new Date('2010/07/01'); // "2010-07-01T05:00:00.000Z"
```

## 3 crear una fecha con un conjunto de valores

en esta forma se crean las fechas pasandole valores numericos siendo cada uno una parte para confirmar la fecha, ahora puede ingresar 1 o varios, se decide segun se necesite. aunque para evitar errores deberia usar un minimo de 3 parametros

```javascript
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
```

un ejemplo de esta forma seria 

```javascript
new Date(2018, 6, 22, 7, 22, 13, 0) // "2018-07-22T12:22:13.000Z"
new Date(2018, 6, 22) // "2018-07-22T05:00:00.000Z" hace una conversion de mi zona horaria, pero otro resultado igual seria Sun Jul 22 2018 00:00:00 GMT-0500 (hora estándar de Colombia)

```

si ingresa menos de 3 parametros puede pasar lo siguiente

```javascript
new Date(2018, 6) //Sun Jul 01 2018 00:00:00 GMT+0200 (Central European Summer Time)
new Date(2018) //Thu Jan 01 1970 01:00:02 GMT+0100 (Central European Standard Time) ... esto tiene que ver con la forma 4

```

## 4 cantidad de milisegundos

ya que en javascript las fechas son una marca de tiempo como se menciono anteriormente

se puede crear una fecha con la cantidad de milisegundos que han transcurrido. esto es poso habitual para crear fechas pero si es usando cuando hacemos operaciones entre fechas como sabes la cantidad de minutos o dias que han pasado entre una fecha y otra. Esto lo pronfundizaremos mas adelante. 

aun asi la forma de crear estas fechas con milisegundos es.


```javascript
const d = new Date(100000000000); // Mon Oct 31 1966 09:13:20 GMT-0500
const d = new Date(-100000000000); // Mon Oct 31 1966 09:13:20 GMT-0500
const d = new Date(24 * 60 * 60 * 1000);
// or
const d = new Date(86400000); // "1970-01-02T00:00:00.000Z"
```

# Zonas horarias

Al inicializar una fecha, puede pasar una zona horaria, de modo que la fecha no se asuma como UTC y luego se convierta a su zona horaria local.

Puede especificar una zona horaria agregándola en formato +HORAS o agregando el nombre de la zona horaria entre paréntesis:

```javascript
new Date('July 22, 2018 07:22:13 +0700')
new Date('July 22, 2018 07:22:13 (CET)')
```

Si especifica un nombre de zona horaria incorrecto entre paréntesis, JavaScript utilizará UTC de forma predeterminada sin quejarse.

Si especifica un formato numérico incorrecto, JavaScript se quejará con un error de "Fecha no válida".


# Metodos de las fechas
- formato de fechas **base** (string)
- obtener datos de las fechas (get)
- modificar datos de las fechas (set)
- formato de fechas **avanzados** (string)

## Metodos de formato de fechas basicos

si imprimimos 
```javascript
const fecha = new Date();
console.log(fecha)
```
en la consola generalmente nos muestra un string dado que aplica un metodo internamente para evitar mostrar un error ese metodo es `toString`. pero en realidad la variable `fecha` es de tipo **Date** y en algunos casos se requiere mostrar en html o enviar al back la fecha en un formato especifico y en algunos casos estandar. para ello existen los siguientes metodos



```javascript
const date = new Date()

date.toString() // "Tue Jan 02 2024 16:50:49 GMT-0500 (hora estándar de Colombia)"
date.toTimeString() //"16:51:04 GMT-0500 (hora estándar de Colombia)"
date.toUTCString() //"Tue, 02 Jan 2024 21:51:18 GMT"
date.toDateString() //"Tue Jan 02 2024"
date.toISOString() //"2024-01-02T21:52:18.998Z"
date.toJSON() //"2024-01-02T21:52:18.998Z"  ... este varia segun la version de JS
date.toLocaleString() //"2/1/2024, 4:52:38 p. m."
date.toLocaleTimeString()	//"4:52:56 p. m."


```

## Obtener datos de las fechas (get)

zona horaria local

```javascript
const date = new Date('2024-01-02T16:59:13')

// NUMBER, cantidad de milisegundos
date.getTime() //1704232440896
date.valueOf() //1532236933000

const date = Date.now() // 1704234410470 si se necesita solo la marca de tiempo mejor usar este

date.getDate() //2 obtiene numero de dia
date.getDay() //2 (0 means sunday, 1 means monday..)
date.getFullYear() //2024
date.getMonth() //0 (starts from 0)
date.getHours() //16
date.getMinutes() //59
date.getSeconds() //13
date.getMilliseconds() //0 (not specified)
date.getTime() //1704232753000
date.getTimezoneOffset() //300 devuelve la diferencia en minutos entre la zona horaria local y la UTC

const date = Date.now() // 1704234410470 si se necesita solo la marca de tiempo mejor usar este
```

zona UTC

```javascript
const date = new Date('2027-01-02T16:59:13')

date.getUTCDate() //2 obtiene numero de dia
date.getUTCDay() //2 (0 means sunday, 1 means monday..)
date.getUTCFullYear() //2024
date.getUTCMonth() //0 (starts from 0)
date.getUTCHours() //21
date.getUTCMinutes() //59
date.getUTCSeconds() //13
date.getUTCMilliseconds() //0 (not specified)
```

### Modificar datos de las fechas (set)

```javascript
const fecha = new Date('2024-01-02T16:59:13')

///  fecha.Metodo()
/// console.log(fecha.toString())

fecha.setDate(10) // 1704923953000 ..."Wed Jan 10 2024 16:59:13 GMT-0500 (hora estándar de Colombia)"
fecha.setFullYear(2040) // 2209154353000 ... "Mon Jan 02 2040 16:59:13 GMT-0500 (hora estándar de Colombia)"
fecha.setMonth(10) // 1730584753000 ... "Fri Nov 02 2040 16:59:13 GMT-0500 (hora estándar de Colombia)"
fecha.setHours(10) // 1704211153000 ... "Tue Jan 02 2024 10:59:13 GMT-0500 (hora estándar de Colombia)"
fecha.setMinutes(10) // 1704229813000 ... "Tue Jan 02 2024 16:10:13 GMT-0500 (hora estándar de Colombia)"
fecha.setSeconds(10) // 1704232750000 ... "Tue Jan 02 2024 16:59:10 GMT-0500 (hora estándar de Colombia)"
fecha.setMilliseconds(10)  // 1704232753010 ... "2024-01-02T21:59:13.010Z"
fecha.setTime(1704232440896) // "Tue Jan 02 2024 16:54:00 GMT-0500 (hora estándar de Colombia)"
```

estos metodos sirven para sumarle o quitarle tiempo a alguna fecha por ejemplo:

```javascript
const fecha = new Date('2027-01-02T16:59:13')

/// console.log(fecha.Metodo()) ... 
///  fecha.Metodo()

fecha.setDate(fecha.getDate()+15)
console.log(fecha.toString())// "Wed Jan 17 2024 16:59:13 GMT-0500 (hora estándar de Colombia)"


///////////////////

const fecha = new Date('2024-01-02T16:59:13');

fecha.setMinutes( fecha.getMinutes() + fecha.getTimezoneOffset() + (2*60))

console.log(fecha.toString()) // "Tue Jan 02 2024 23:59:13 GMT-0500 (hora estándar de Colombia)"
```

### Formato de fechas **avanzados** (string)

puedes darle un formato customizado a una fecha puedes hacerlo por ejemplo obtieniendo los valores de una fecha y concatenandolos en un string como por ejemplo:

```javascript
const fecha = new Date('2024-10-15T16:59:13')

const fecha_formateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`

console.log(fecha_formateada) // "15-10-2024"
```
ahora javascrip nos ofrece mas formas de formatear fechas usando los metodos que ya vimos 
- toLocaleString
- toLocaleDateString
- toLocaleTimeString

esos metodos por debajo usan una funcion de internazionalizacion de javascript llamada [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) de `Internationalization` esta funcion `Intl` permite no solo formatear fechas tambien numeros para diferentes regiones del mundo. en este caso veremos las fechas en especifico con el metodo **`toLocaleString`**

el metodo **`toLocaleString`** puede no aceptar nungun parametro pero puede aceptar mas: 

```javascript
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

- **locales** indica la region y se acepta cualquier region con un formato especifico por ejemplo para estados undos seria `en-US`, si quiere encontrar alguna region puede encontrarla en la siguiente [tabla](https://github.com/TiagoDanin/Locale-Codes?tab=readme-ov-file#locale-list). este parametro incluso puede hacer que cambie el idioma en el que se muestra la fecha
- **options** las opciones son para configurar el formato de la fecha. duchas opciones las puede encontrar en la [documentacion oficial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)

aqui unos ejemplos:

```javascript
const fecha = new Date('2024-10-15T16:59:13')
console.log(fecha.toLocaleString("es-CO",{
    year: "numeric",
    month:"short",
    day:"2-digit",
})) // "15 de oct de 2024"

console.log(fecha.toLocaleString("es-CO",{
    year: "numeric",
    month:"long",
    day:"2-digit",
}))// "15 de octubre de 2024"


console.log(fecha.toLocaleString("es-CO",{
    year: "numeric",
    month:"long",
    day:"2-digit",
    hour: "2-digit",
    minute:"2-digit"
})) // "15 de octubre de 2024, 04:59 p. m."

console.log(fecha.toLocaleString("es-CO",{
    month:"long",
    day:"2-digit",
    weekday:"long" 
})) // "martes, 15 de octubre"

console.log(fecha.toLocaleString("es-ES",{
    year: "numeric",
    month:"long",
    day:"2-digit",
    hour: "2-digit",
    minute:"2-digit",
    hour12: false
})) // "15 de octubre de 2024, 16:59"

console.log(fecha.toLocaleString("es-ES",{
    year: "numeric",
    month:"long",
    day:"2-digit",
    hour: "2-digit",
    minute:"2-digit",
    hour12: true,
    dayPeriod:"long",
})) // "15 de octubre de 2024, 04:59 de la tarde"

console.log(fecha.toLocaleString("es-ES",{
    year: "numeric",
    month:"long",
    day:"2-digit",
    hour: "2-digit",
    minute:"2-digit",
    timeZone: "Asia/Seoul",
})) // "16 de octubre de 2024, 06:59"

console.log(fecha.toLocaleString("ko-KR",{
    year: "numeric",
    month:"long",
    day:"2-digit",
    hour: "2-digit",
    minute:"2-digit",
    timeZone: "Asia/Seoul",
})) // "2024년 10월 16일 오전 06:59"
```


# Operaciones entre fechas

con las fechas se puede hacer operaaciones y comparaciones como por ejemplo sabes si una fecha ya paso o no.

## comparaciones

imagina que tienes una aplicacion de calendario donde se agenden hoteles y no puedes aceptar que se ingresen fechas anteriores al dia de hoy. puedes validarlo asi

```txt
fecha1 < fecha 2 // esto devuelve un boolean diciendo si se cumple o no, se comparan como si fueran numeros
```

```javascript
// funcion que devuelve true si la fecha es valida y false si no lo es
function fechaValida(fecha) {
    return fecha>new Date()?true:false
}

console.log(fechaValida( new Date("1999-01-01") )) // false
console.log(fechaValida( new Date("2024-03-21") )) // true
```

## operaciones

puedes sumar y restar fechas con el fin de sabes distancia entre fechas por ejemplo quieres sabes cuantos dias hay de diferencia entre 2 fechas dadas

```javascript
const fecha1 = new Date('2024-10-15T16:59:13')
const fecha2 = new Date('2024-11-22T16:59:13')
const distancia = fecha2 - fecha1
console.log(distancia) // 3283200000 estos son milisegundos


// si quieremos convertirlo a dias hacemos
//              distanci/ms/ss/MM/hh
console.log(distancia/1000/60/60/24) // 38 

// ahora tambien podemos obtener la cantidad de meses y dias si queremos

const fecha_temporal = new Date(distancia)
console.log(`la distancia es de ${fecha_temporal.getMonth()} meses con ${fecha_temporal.getDate()} dias`) // "la distancia es de 1 meses con 7 dias"
```

