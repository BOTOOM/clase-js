# GIT

Muchas veces en el pasado puede que nos tocara tener una version modificada de algo. un ejemplo es un proyecto final de universidad en el cual puede ocurrir lo siguiente:

![Alt text](image.png)

Afortunadamente Word y google Docs tiene un sistema con el cual se puede ver que cambio hubieron recientemente, quien y cuando se hicieron.

Al momento de desarrollar uno se puede encontrar en una situacion similar. y aqui es donde viene a usarse GIT

![Alt text](image-1.png)

Git es un sistema de control de versiones que nos permite poder gestionar todas las versiones de nuestro codigo por medio de comandos. Actualmente VSCODE viene con herramientas que hacen mas amigable el uso de git pero se debe de tener en cuenta que hay ocasiones donde se va a requerir el uso de la terminal.

![Alt text](image-2.png)

# Instalar git

git no es complicado de instalar para ello se puede seguir la [guia de git](https://git-scm.com/downloads)

puedes confirmar si ya tienes git instalado ejecutando en una terminal `git -v`

# Comandos basicos de GIT

ya con git puedes comenzar a usarlo

## Configurar tu identidad en git

Asi como en word y google docs cuando compartes un archivo y alguien realiza modificaciones estas plataformas no dicen quien y cuando realizo los cambios. En git es similar y para ello necesitas decirle a git a nombre de quien van a estar todos los cambios que realices.

Para ello tienes que ejecutar

```bash
# git config --global user.name [Nombre]
git config --global user.name Edwar
# git config --global user.email [email]
git config --global user.email edwar@gmail.com
```

con esto git ya sabe que los cambios que hagas van a estar vinculados a ese nombre y ese email. al usar `--global` esto se aplicara para todos los repositorios que tengas

## que es un repositorio?

Un repositorio en Git es un lugar donde puedes almacenar tu código y archivos. Es como un armario donde guardas las cosas que estás trabajando.

Cuando creas un repositorio, Git crea un historial de todas las versiones de tu código. Esto significa que puedes volver atrás en el tiempo y ver cómo era tu código en cualquier momento.

Los repositorios también pueden ser compartidos con otros. Esto te permite colaborar con otros desarrolladores en un proyecto.

En términos sencillos, un repositorio en Git es una caja de herramientas que te permite:

- Guardar tu código y archivos de forma segura
- Seguir el historial de cambios de tu código
- Colaborar con otros desarrolladores

## Inicializar el repositiorio

puede iniciar creando tu repositorio con github y luego seguir los pasos que alli te indican o tambien puedes seguir lo siguiente.

Desafortunandamente para este primer paso VS no siempre muestra la opcion segun encontre puede aparecer algo asi:

![Alt text](image-3.png) 

Dado que no siempre aparecera vamos a abrir la terminal es la ubicacion de nuestro codigo, es decir la carpeta que contiene todo el codigo

![Alt text](Screenshot_20240125_154444.png)

luego en la terminal escribira 

```bash
git init
```

en este momento se ha activado git en tu proyecto y se ha creado esl repositiorio y git comenzara a vizualizar los cambios realizado.

al haber inicializado el repositorio es muy probable que en vscode vea una nueva carpeta que se le ha creado, si no la ve no hay lio generalmente es una carpeta oculta:

![Alt text](image-4.png)

en esa carpete `.git` se cuardan todos los cambios que tenga guardados y si tiene un archivo vera que se archivo aparece en verde indicando que es un cambio nuevo

**NOTA: git no tiene guardado automatico por lo cual no guarda automaticamente los cambios, pero git si revisa automaticamente cuales son los cambios nuevos y estara a la espera de que el usuario le indique que guarde los cambios**

## preparar los cambios para guardarse y guardar cambios

Git te indica que cambio hay si eliminaste, añadiste o modificaste algo. Esto aplica pra indicar si eliminaste o creaste un archivo o lo modificaste. 

En caso de modificar un archivo te indicara si modificaste lineas, si añadiste lineas o eliminaste lineas.

si en vscode nos vamos al icono de la extension de git vamos a encontrar lo siguiente

![Alt text](image-5.png)

alli aparece los cambios que el ha detectactado.

### preparar los cambios

Para poder guarda los cambios primero tenemos que añadirlos a la lista de cambios que deseas guardar esto dejara esos cambios en algo que git llama `staging area`. para ello usamos el boton de **+** al lado dle nombre del archivo, tambien donde dice changes tambien aparece uno para añadir todos los archivos modificados

si usaras comandos usarias

```bash
# git add [nombre_del_archivo]
git add index.html
```

al añadir un archivo a la lista de lo que deseamos guardar se vera algo asi 

![Alt text](image-6.png)

### guardar los cambios

El proceso de guardar cambios en git se conoce como **`commit`** y este commit requiere un mensaje para ello en vscode tenemos un campo para el mensaje el cual debe de ser preferiblemente corto y que indique claramente lo que se realizo en este cambio.

Los commit tambien pueden cosiderarse como versiones de su proyecto o su codigo

![Alt text](image-7.png)

despues se da clic en el boton que dice commit para guardar el cambio con el mensaje

debido al ejemplo que llevamos tendriamos como resultado de este proceso la siguiente pantalla:
![Alt text](image-8.png)

asi se haria con comandos

```bash
# git commit -m [mensaje]
git commit -m "mi primer commit"
```

por ultimo guardare mi archivo css con un commit

## Vizualizacion de nuevos cambios

Ya despues de nuestro primer commit en el cual ya tenemos archivos que git ya considera como creados y guardados cuando hagamos un cambio sobre ellos git nos mostrara estos cambios

para el siguiente ejemplo he añadido 5 divs en mi html, tambien borrare el title de mi head y añadire unas lineas vacias al final. en vscode veremos lo siguiente en nuestro archivo html en la seccion lateral donde estan los numeros de la slineas de codigo apareceran algunos colores, rojo indica que algo se elimino, verde añgo añadido y azul algo modificado

![Alt text](image-9.png)

tambien vemos que en la parte lateral nuestros archivos aparecen con una M y en naranja indicando que han sido modificados. style aparece modificado por que le he añadido un pequeño codigo.

Al momento de guardar nuestros cambios podemos visualizar que cambios vamos a guardar. estos con el fin de asegurarnos que nos se nos va a ir nada que no queremos que sea guardado

en esta vista podemos encontrar a la izquierda el archivo antes de las modificaciones y a la derecha el archivo despues de las modificaciones.

![Alt text](image-10.png)

luego de verificar los cambios puedo guardar mis archivo realizando un commit

## comprender el proceso actual

Se que a veces puede ser un poco complicado el entender como funciona esto lo podemos ver como columnas de un kanmban donde sucede lo siguiente

![Alt text](image-11.png)

los siguientes videos pueden ser de ayuda


[![Watch the video](https://img.youtube.com/vi/lD5-xYYL5eA/mqdefault.jpg)](https://youtu.be/lD5-xYYL5eA)

[![Watch the video](https://img.youtube.com/vi/QutgAelG2Jg/mqdefault.jpg)](https://youtu.be/QutgAelG2Jg)

[![Watch the video](https://img.youtube.com/vi/t6GMcIoCD9Q/mqdefault.jpg)](https://youtu.be/t6GMcIoCD9Q)


## ver el historial de commits

En git podemos ver el historial de todos los cambios realizados y para ello con vscode tenemos algunas extensiones antes de ver estas extensiones quiero mostrar la forma de hacerlo con comandos

```bash
# git commit -m [mensaje]
git commit -m "mi primer commit"
```

ahora una de las extensiones es:

![Alt text](image-12.png)

al instalar la extensio podemos ver en nuestra pestaña de git un nuevo boton:

![Alt text](image-13.png)

si le damos clic al boton veremos todos los cambios de forma grafica en la cual encontraremos un grafico al inicio como una linea de tiempo, los commit estaran ordenados desde el mas reciente hacia el mas antiguo. luego tenemos la descripcion y alli hay algo que dice master, eso es algo que veremos en la seccion de **ramas** , luego esta la fecha del commit, luego el autor y por ultimo donde dice **"commit"** alli hay un texto alfanumerico , este es un dado conocido como SHA el cual es un identificados unico que hace referencia a cada commit. esto nos servira en secciones posteriores.

![Alt text](image-14.png)

## Viaje entre versiones o commit - checkout

Con los diferentes cambios guardados como commit nosotros podemos devolvernos entre versiones. si lo ver como una linea de tiempo imagina poder viajar entre el presente y cualquier punto en el pasado segun desees y volver al presente sin lio.

![Alt text](image-15.png)

imaginemos que tenemos la siguiente linea de tiempo el primer item de la lista es donde estamos ubicados actualmente y se podria considerar el presente pero existe la posibilidad que requiera ver los archivos en una version anterior antes de que usted o alguno de sus compañeros realizaran algun cambio.

![Alt text](image-14.png)

imaginese que un compañero incluyo un error en uno de los cambios y usted quiere verificar si los cambios anteriores a los de el funcionan. pues puede hacerlo y para ello existe `checkout`

**`checkout`** le sirve para viajar entre commit y entre ramas(ramas lo veremos despues) y como viaja entre commit usando el identificador unico de cada commit el cual es el SHA

si le damos clic a un commit de la lista vamos a obtener lo siguiente en lo cual encontramos la siguiente informacion:

- commit:  este es el identificador SHA del commit
- parents: es el commit o los commit que son padres de el en este caso solo es uno pero cuando viamos ramas podremos ver mas.  este parent es el SHA del commit anterior en en la lista aparece como **creacion html inicial**
- Autor y commiter: es quien realizo el commit - si alguna vez quiere saber quien introdujo un error en este lugar esta esa información
- date: es la fecha exacta cuando se realizo el commit

![Alt text](image-16.png)

ya con esta informacion podemos obtener este identificador para poder viajar a esa version de ese commit usando `checkout`, el sha nos sirve si queremos hacer esta opcion por comando en la terminal


```bash
# git chechout [SHA]
git checkout 4ffcb1991b5202f5c4f440db8380391ae35f0f1f
```

ahora por interfaz nos vamos a la vista de nuestros commit y selecionamos el commit al que queremos viajar y le damos clic derecho luego elgimos la opcion y nos preguntara si queremos hacer el checkout hacia ese commit y le daremos a SI

![Alt text](Screenshot_20240202_152836.png)

al hacer esto veremos un pequeño cambio en nuestra grafica y es que el circulo con punto negro ha cambiado de estar en el primer commit de la lista a estar en el seleccionado , esto nos indica que se ha realizado la accion correctamente

![Alt text](image-17.png)

esto lo podemos verificar con vscode en la parte inferior derecha donde estara la version acortada del SHA del commit 

![Alt text](Screenshot_20240202_153202.png)

ahora si vemos el archivo html veremos que esta en la version antes de crear los DIV

![Alt text](image-18.png)

y para volver a nuestro commit principal (el presente) haremos lo mismo

## Deshacer cambios

## Ramas

## Integracion con github

## Trabajo en equipo