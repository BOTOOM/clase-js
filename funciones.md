# Funciones


Las funciones son bloques de codigo que se pueden llamar a ejecucion cuando se desee. La finalidad es poder reutulizar ese codigo y poder llamarlo a ejecucion las veces que se desee.

## Creacion de funciones

hay varias formas de poder crear una funcion en javascript asi que iniciaremos por lo basico una funcion comun o estandar


para poder crear una funcion debes de primero indicarle al lenguaje que crearas una funcion asi como para crear una variables usas `const` o `let` en el caso de las funciones usaras `function` y asi como las variables tambien requieren un nombre.

el siguiente es un ejemplo de como declarar una funcion
```javascript
function raiz_cuadrada(){
    // codigo
}
```
en el ejemlo anterior se ha declarado una funcion llamada `raiz_cuadrada` y despues del nombre de la funcion se encuentran unos parentesis `()` los cuales son usados para los parametros de la funcion de los cuales ya hablaremos. y posterior a los parentesis de encuentran los corchetes denntro de los cuales ira el codigo que se usara, se puede resumir que una funcion tiene la siguiente estructura.

![Alt text](image.png)

**IMPORTANTE: importan mayosculas y minisculas es diferente una funciona llamada `suma` de `Suma`**

## llamar funciones

ahora una funcion no tiene utilidad si no es usada y con solo crearla la funcion no hace nada. por lo cual se requiere que la funcion sea llamada,invocada o ejecutada (todos son sinonimos). para llamar a la funcion debes de escribir `nombre_de_la_funcion()`

por ejemplo para la funcion que creamos anteriormente

```javascript
//creamos la funcion
function raiz_cuadrada(){
    // codigo
}
// llamamos la funcion
raiz_cuadrada() 
```
en el momento que se llama la funcion se comienza a ejecutar el codigo dentro de esta.

**IMPORTANTE: SI NO LLAMAS LA FUNCION NUNCA SE EJECUTA**

ejemplo de bard 
> Imagina que tienes un robot que puede hacer muchas cosas, como caminar, hablar y bailar. Pero el robot no puede hacer nada hasta que le digas qué hacer.
>
>Por ejemplo, si quieres que el robot camine, tienes que decirle: "Robot, camina". El robot escuchará tus instrucciones y comenzará a caminar.
>
>En este ejemplo, "Robot, camina" es una función. La función "camina" le dice al robot qué hacer.

ahora imaginemos la siguiente funcion

```javascript
function saludar() {
  console.log("Hola, mundo!");
}

saludar();
```

### no importa el orden de llamado de las funciones

en javascript no importa el orden de llamar a las funciones por lo cual puedes llamarla y luego crearla lo importante es que este creada y tenga el mismo nombre. los 2 siguientes ejemplos son validos:

```javascript
function saludar() {
  console.log("Hola, mundo!");
}

saludar();
```

o 

```javascript
saludar();

function saludar() {
  console.log("Hola, mundo!");
}

```

## parametros de una funcion

una funcion puede recibir parametros los cuales son como variables que solo existen dentro de la funcion y estos se pueden usar para darle mayor dinamismo a una funcion, por ejemplo puedes tener un codigo que calcule el area a 3 circulos diferentes podrias tener 


```javascript
// radios
const radio1 = 2;
const radio2 = 5;
const radio3 = 10;
// areas
const area1 = Math.PI * (radio1**2)
const area2 = Math.PI * (radio2**2)
const area3 = Math.PI * (radio3**2)

```

en este caso se puede simplificar con una funcion que calcule el area del circulo y reciba como parametro el radio

```javascript
function areaCirculo(radio) {
    console.log(Math.PI * radio ** 2)
}
```
dento de los parentesis puedes poner `N` parametros y todos separados por coma `,`

```javascript
function usuario(nombre, correo, contraseña, cedula, telefono) {
}
```

para llamar la funcion usuario e ingresarle los parametros usamos:

```javascript
usuario("Edwar Diaz", "edwar04@hotmail.com", "12345", "11111333", "+573216549875")
```

tambien puedes usar variables que ya tengas declaradas para ser usadas como parametros, por ejemplo:


```javascript
const nombre = "Edwar Diaz";
const correo = "edwar04@hotmail.com";
const contraseña = "12345";
const cedula = "11111333";
const telefono = "+573216549875";
usuario(nombre, correo, contraseña, cedula, telefono);
```

![Alt text](image-1.png)

en el ejemplo de la funcion usuario todos los parametros son requeridos por lo cual si alguno falta la funcion puede dar error

### parametros opcionales

en algunos casos se puede desear que algunos de los paramteros de la funcion sea opcional para ello le daremos a los parametros opcionales un valor por defecto:


```javascript
function usuario(nombre, correo, contraseña, cedula, telefono, saldo=10000) {
}
```

en este caso salario es un parametro opcional y si no es enviado por defecto tendra el valor de  `10000` y si se envia su valor sera remplazado


**PREGUNTA**


```javascript
function usuario(nombre, correo, contraseña, cedula, telefono, saldo=10000, deudas=0) {
}

usuario("Edwar Diaz", "edwar04@hotmail.com", "12345", "11111333", "+573216549875",10)
```
 
> cual es el valor de salario y deudas

## retornar valores en una funcion

una funcion puede o no retornar algun valor por ejemplo la funcion `saludar` no devuelve nada dado que solo quiero imprimir algo en consola

```javascript
function saludar() {
  console.log("Hola, mundo!");
}

saludar();
```

pero si deseo devolver algun valor para que este le sea asignado a una variable puedo usar `return` y con ello devolvere un valor como resoltado de la funcion, retomando la funcion del area del circulo

```javascript
function areaCirculo(radio) {
    const area = Math.PI * radio ** 2
    return area
}

// o 

function areaCirculo(radio) {
    return Math.PI * radio ** 2
}
```

```javascript
function esmayor(edad) {
    return (edad > 18) ? true:false
}

```

de una funcion se puede retornar cualquier tipo de variable
- string
- number
- boolean
- array
- json
- date
- incluso funciones

```javascript
function nombreCompleto(nombre, apellido) {
    return nombrea + " " + pellido
}

// o

function nombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`
}

const mi_nombre = nombreCompleto("Edwar", "Diaz") // resultado "Edwar Diaz"
```


termiando el ejemplo de las ares de los circulos

```javascript

function areaCirculo(radio) {
    return Math.PI * radio ** 2
}

// radios
const radio1 = 2;
const radio2 = 5;
const radio3 = 10;
// areas
const area1 = areaCirculo(radio1)
const area2 = areaCirculo(radio2)
const area3 = areaCirculo(radio3)

```

de tal manera que si necesito cambiar algo enla formula solo debo hacer el cambio una vez y se aplicara a todos los lugares donde se use la funcion.


## usar muchas funciones

una funcion puede llamar a otra funcion. normalmente las funciones se declaran al mismo nivel y es raro encontrar una funcion declarada dentro de otra y asi mismo se pueden pasar parametros de una funcion a otra

```javascript
function saldo(ingresos, salidas){
    return ingresos - salidas;
}

function usuario(nombre, ingresos, salidas) {
    const saldo_restante = saldo(ingresos, salidas)
    return `El usuario ${nombre} tiene un saldo de ${saldo_restante}`
}

console.log( usuario("edwar", 100000, 2000) ) // resultado: El usuario edwar tiene un saldo de 98000
```

tambien puede haber una funcion dentro de otra a esto se les conoce como funciones anidadas o en ingles `nested` 

el ejemplo anterior puede transformarse en lo siguiente

```javascript

function usuario(nombre, ingresos, salidas) {
    function saldo(ingresos, salidas){
        return ingresos - salidas;
    }
    const saldo_restante = saldo(ingresos, salidas)
    return `El usuario ${nombre} tiene un saldo de ${saldo_restante}`
}

console.log( usuario("edwar", 100000, 2000) ) // resultado: El usuario edwar tiene un saldo de 98000
```
en este caso la funcion `saldo` solo existe dentro de la funcion usuario por lo cual lo sigueinte daria error:

```javascript

function usuario(nombre, ingresos, salidas) {
    function saldo(ingresos, salidas){
        return ingresos - salidas;
    }
    const saldo_restante = saldo(ingresos, salidas)
    return `El usuario ${nombre} tiene un saldo de ${saldo_restante}`
}

const mi_saldo = saldo(10000,5000)
```

# funciones flecha o arrow functions

las funciones flecha es otra forma de escribir una funcion, la cual tiene una estructura algo similar a `() => {}` 

en este caso ya no usamos la palabra `funcion` pero si debemos asignar esa funcion a una variable

podemos transformas la funcion saldo

```javascript
// forma estandar
function saldo(ingresos, salidas){
    return ingresos - salidas;
}
//arrow function
const saldo = (ingresos, salidas) => {
    return ingresos - salidas;
}

const mi_saldo = saldo(10000,5000)
```

las funciones flecha se ecuentran mas comun mente en metodos de los array como el metodo map

```javascript
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => {
    return x * 2
});

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

tambien se puede simplicicar la arrow funcion a una sola linea eliminando los corchetes y el return

aqui unos ejemplos

```javascript
// normal
const map1 = array1.map((x) => {
    return x * 2
});
// simplificada
const map1 = array1.map((x) => x * 2);

// normal
const found = array1.find((x) =>  {
    return x > 10
});
// simplificada
const found = array1.find((x) => x > 10);
```

se suele simplicar cuando consideras que puedes resumir tu codigo a una sola linea pero si necesitas mas de una linea de codigo debes usar los corchetes

**forma estandar**

```javascript
function saldo(ingresos, salidas){
    return ingresos - salidas;
}

function usuario(nombre, ingresos, salidas) {
    const saldo_restante = saldo(ingresos, salidas)
    return `El usuario ${nombre} tiene un saldo de ${saldo_restante}`
}

console.log( usuario("edwar", 100000, 2000) ) // resultado: El usuario edwar tiene un saldo de 98000
```
**forma arraow function**


```javascript
const saldo = (ingresos, salidas) => ingresos - salidas;

const usuario = (nombre, ingresos, salidas) => {
    const saldo_restante = saldo(ingresos, salidas)
    return `El usuario ${nombre} tiene un saldo de ${saldo_restante}`
}

console.log( usuario("edwar", 100000, 2000) ) // resultado: El usuario edwar tiene un saldo de 98000
```


## recursividad

la recursividad es la capacidad de la funciones de poder llamarse a asi mismas para obtener un resoldado de algo repetitivo por ejemplo un factorial.




para que una funcion sea recursiva literalmente rebe de llamarse a si misma

```javascript

function prueba(parametro) {
    return prueba(parametro)
}
```

para el caso de la recursividad de debe de colocar una conficion en la cual se le indique cuando parar o de loc ontrario se generara un bucle infinito

```javascript

function prueba(parametro) {
    if(parametro === true) {
        return prueba(parametro)
    } else {
        return 0
    }
}
```


el factorial de 3 se puede describir como 

`(3 * (3 - 1) * (3 - 2)) = 3 * 2 * 1`

y el factorial de 4 como

`(4 * (4 - 1) * (4 - 2) * (4 - 3)) = 4 * 3 * 2 * 1`

por lo cual si quiero hacer una funcion que me calcule un factorial se podria usar:
```javascript

function factorial(n) {
  return n >= 1 ? n * factorial(n - 1) : 1
}
```

ejercicios: 

1. cree una funcion que calcule el perimeto de una cadrado
2. cree una funcion que reciba un string el cual puede tener espacios al inicio y al final y la borre los espacios ejemplo `"   hola mundo    "` debe de retornar `"Hola mundo"`
3. cree una funcion que sea una calculadora de 2 numeros para ello la funcion va a recibir 3 parametros: numero1, numero2, operacion. El parametro operacion es un string que indica que tipo de operacion se ha de ejecutar (se recomienda usar switch) las posibilidades de ese parametro son `suma` `resta`, `multiplicacion` ,`divicion`. adicionalmente tenga en cuenta que no se puede dividir entre cero y para evitar errores
4. cree una funcion recursiva que calcule la suma suceciva de un numero dado es decir que si se ingresa como parametro  `4` se calcule la suma `4+3+2+1` y si ingreso `6` se calcule `6+5+4+3+2+1`