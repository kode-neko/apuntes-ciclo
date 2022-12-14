[TOC]

# Programaci贸n B谩sica 1 - Variables & Estructuras de Control



## 1. Variables

馃摉 **Variable** 

> Estructura b谩sica para almacenar un dato. Se les asocia un nombre y tipo.

```java
int cont = 3;
double price = 3.2;
char grade = 'A';
boolean isSuperman = true;
```

No es lo mismo "declarar" que "asignar" una variable

```java

int cont; // declaraci贸n
cont = 4; // asignaci贸n
int num = 7; // declaraci贸n y asignaci贸n
```

馃摉  **Declaraci贸n**

> Definir una variable

馃摉  **Asignaci贸n**

> Asociar un valor a una variable de acuerdo a su tipo



### 1.1. Tipos

Vamos a mostrar las m谩s comunes

| Tipo    | Definici贸n                       |
| ------- | -------------------------------- |
| int     | N潞 enteros                       |
| double  | N潞 decimales                     |
| float   | N潞 decimales con mayor precisi贸n |
| char    | Un caracter                      |
| boolean | Guarda el valor true o false     |

```java
int cont = 1;
double price = 0.02;
float temperature = 0.005;
char score = 'S';
boolean isMonster = false;
boolean isSuperman = true;
```

鈽? **Java**

> Este tipo de datos comunmente se llaman datos simples, en el caso de Java tambi茅n reciben el nombre de datos "primitivos". Cuando avancemos podremos ver estructuras de datos y los llamados objetos. Con ellos podemos guardar de otra forma la informaci贸n y hacer m谩s operaciones.



### 1.2. Nombres

- Han de empezar con una letra, gui贸n bajo (_) o dolar ($)
- Pueden contener letras, n煤meros, gui贸n bajo (_) o dolar ($)

Se recomienda que el nombre cumpla las siguienets normas. Por lo general toda la comunidad las usa y ayuda a una mejor comprensi贸n del c贸digo. Incluso alg煤n fundamentalista puede quemarte en la hoguera sino las sigues 馃敟

- <u>Han de ser *"camelcase"*:</u> `numPersonas`, `edadPerro`, `checkPuertaGiratoria`
- num<u>Que tengan significado</u>
  - `a`, `qw12`, `kk`, `pioPio`: 驴Qu茅 significan?
  - `numCoches`, `isActive`, `nombreAlumnoClase`: 隆Te dan una pista de lo que son!
- <u>Preferiblemente que sean en ingl茅s:</u> No es oficial, pero la mayor parte de la documentaci贸n sobre programaci贸n est谩 en ingl茅s. En esta gu铆a usamos diversas variables en espa帽ol paraq ue sea ameno y gracioso, pero en la vida real escribo mi c贸digo en Ingl茅s. Me han llegado a contar compa帽eros que han visto c贸digo en gallego y catal谩n. Si quieres tener difusi贸n usa el ingl茅s, aunque hay que reconocer que hay una gran comundiad hispana.

馃幉 **Ejercicios**

> - 驴C贸mo nombrar铆as a las variables?



### 1.3. Tipados

Hay lenguajes de programaci贸n donde no se establece o no es necesario especificar el tipado. Normalmente ocurre en aquellos que funcionan mediante un int茅rprete o motor. El propio interprete deduce su tipo, incluso este muta con las sucesivas operaciones que se aplica a la variables.

馃摉  **Tipado Fuerte** 

> Lenguaje donde las variables cumplen lo siguiente
>
> - Se especifica su tipo en el momento de la declaraci贸n
> - Solo se puede asignar valores del tipo declarado
> - Normal en lenguajes compilados
> - Si se incumplen las normas el compilador se detiene e informa del problema ocurrido

馃摉  **Tipado D茅bil** 

> Lenguaje donde las variables cumplen lo siguiente
>
> - Lenguajes donde no es necesario indicar el tipo en la declaraci贸n
> - Puede asignarse con valores de distinto tipo
> - Normal en lenguajes interpretados

鈽? **Java**

> Es un lenguaje de tipado fuerte. Si compilamos nuestra aplicaci贸n y no declaramos ning煤n tipo o asignamos un valor que no corresponde, 茅sta se para y nos muestra en la pantalla el error y donde fu茅.
>
> Para evitar estos problemas los programadores usamos los IDE. Incluyen mecanismos para subrayar lineas de c贸digo que incumplen la sintaxis u otros errores. Como esto es un curso de inciaci贸n seguimos proponiendo el uso del editor de textos y de los editores online. Nos limitamos a peque帽as aplicaciones donde es f谩cil encontrar el error.
>



### 1.4. Case Sensitive

```java
int num = 1;
int NUM = 1;
int NuM = 1;
int nUm = 1;
```

Los 4 ejemplos son 4 variables distintas. Todas se llaman "num" pero f铆jate, se usan may煤suculas y min煤suclas.

馃摉  **Case Sensitive**

> Caracteristica de un lenguaje donde el nombre de las variables tiene en cuenta may煤sculas y min煤sculas, a pesar de que se trate de la misma palabra.



### 1.5. Constantes

馃摉  **Constante**

> Variables cuyo valor no se puede cambiar posteriormente en el programa. La variable es asignada en el momento de su declaraci贸n.

```java
const int NUM_MAX_CATS = 3;
NUM_MAX_CATS = 4; // genera un error de compilaci贸n
const int NUM_MIN_DOGS;  // genera un error de compilaci贸n
```

De momento su utilidad no lo entenderas, empiezan a aparecer en la programaci贸n orientada a objetos. Normalmente se ubican en las primeras lineas de c贸digo, pero si se incumple esta normal no provoca error de compilaci贸n. Tampoco es obligatorio que se escriban con may煤sculas, es una convenci贸n que normalmente se mantiene entre programadores de Java. De momento basta con saber su existencia para cuando nos lo encontremos en ejemplos y ejercicios 馃槈

鈽? **Java**

> Se usa la palabra `const` para crearlas. Cada lenguaje tiene su manera peculiar de hacerlo. En diversos lenguajes interpretados tradicionales no hab铆an mecanismos para definirlas, sin embargo en la actualidad debido a sus ventajas se ha visto necesario su incorporaci贸n. A continuaci贸n un ejemplo de c贸digo Javascript, un lenguaje interpretado utilizado en los navegadores web.
>
> ```javascript
> // tradicional
> phone_es_code = 94;
> isSpain;
> var randomVar = "c";
> 
> // actual
> const PHONE_ES_CODE = 94;
> let isSpain;
> ```
>
> 隆Solo con el nombre bastaba para su existencia! En Javascript si usabas una variable sin declarar, dependiendo del contexto, asignaba el valor m谩s adecuado. Incluso podias usar la palabra ```var```, pero se generaban problemas de "contexto" (tranquilos, un concepto que se ve con la pr谩ctica y que ahora apenas no molesta). Parece una locura, pero en diversas situaciones es ventajoso usar tipado d茅bil. En los 煤ltimos a帽os aparecieron las palabras ```const``` y ```let```, uno para declarar constantes y el otro para variables modificables.
>



---

馃幉 **Ejercicios**

> - 驴Cu谩nto sabes de variables?



## 2. Operadores

Hemos visto como declarar y asignar variables 驴pero habr谩 que hacer algo con ellas?. Comencemos con los operadores

### 2.1. Aritm茅ticos

```java
int ingresos = 1000;
int deudas = 600;
int finDeMes = 1000 - 600;
System.out.println("Solamente ahorras " + finDeMes + " euros al mes");
```

Aqu铆 una lista junto con un ejemplo de uso

| Operador | Operaci贸n                    |
| -------- | ---------------------------- |
| `+`      | suma                         |
| `-`      | resta                        |
| `*`      | multiplicaci贸n               |
| `/`      | divisi贸n entera              |
| `%`      | m贸dulo, resto de la divisi贸n |
| `^`      | potencia                     |

```java
int num01 = 5;
int num02 = 2;

int suma = num01 + num02;
int resta = num01 - num02;
int mult = num01 * num02;
int div = num01 / num02;
int mod = num01 % num02;
int potencia = num01 ^ num02;

System.out.println(suma); // 7
System.out.println(resta); // 3
System.out.println(mult); // 10
System.out.println(div); // 2
System.out.println(mod); // 0
System.out.println(potencia); // 25

```

Hay otro tipo de operados que son los de incremento y decremento. Permiten de forma sencilla sumar o restar 1 unidad.

```java
int cont = 5;
cont = cont + 1; //6
cont ++; //7
cont ++; //8
cont --; //7
```

Sobretodo son usados con los "bucles" que los veremos m谩s adelante.

### 2.2. L贸gicos

Son muy usados en las estructuras de control y bucles. Hay que tener muy claro como funcionan los operadores l贸gicos. A continuaci贸n mostramos en tablas la informaci贸n de estos operadores junto con un ejemplo.

| Operador | Operaci贸n L贸gica |
| -------- | ---------------- |
| `&&`     | AND              |
| \|\|     | OR               |
| `==`     | EQUAL            |
| `!=`     | NOT EQUAL        |

| variable 1 | variable 2 | &&    | **\|\|** | ==    | !=    |
| ---------- | ---------- | ----- | -------- | ----- | ----- |
| false      | false      | false | false    | true  | false |
| true       | true       | true  | true     | true  | false |
| true       | false      | false | true     | false | true  |
| false      | true       | false | true     | false | true  |

```java
boolean logic01 = true;
boolean logic02 = false;

System.out.println(logic01 && logic02); // false
System.out.println(logic01 || logic02); // true
System.out.println(logic01 == logic02); // false
System.out.println(logic01 != logic02); // true

int num01 = 1;
int num02 = 2;

System.out.println(num01 == num02); // false
System.out.println(num01 != num02); // true
```



---

馃幉 **Ejercicios**

> - Veamos si sabes calcular el resultado de estas operaciones l贸gicas
> - 驴Qu茅 hace cada operador?



## 3. Estructuras de Control



### 4.1. CondicionalesCo

Estas estructruas comprueban una condici贸n que determina que bloques de c贸digo se ejecutan.



#### 4.1.1. Simple

Con if podemos comprobar una 煤nica condici贸n

```java
int num = 5;
if(num > 3) {
   System.out.println("Es mayor que 3");
}
```

Dentro de lso parentesis del if se halla la condici贸n. 脡sta es una operaci贸n l贸gica cuyos 煤nicos resultados son verdadero o falso, o bien true o false. Si la condici贸n es verdadera se ejecuta el c贸digo entre llaves.



#### 4.1.2. Doble

Un if puede ir acompa帽ado de un else. Permite indicar que hacer cuando la condici贸n sea falsa.

```java
int num = 5;
if(num > 3) {
   System.out.println("Es mayor que 3");
} else {
   System.out.println("Es menor o igual que 3");
}
```



#### 4.1.3. M煤ltiple

Cuando queremos comprobar m煤ltiples condiciones concatenamos multiples else if. Si encuentra una condici贸n que se cumple, no comprueba las siguientes restantes.

```java
int num = 70;
if(num < 50) {
   System.out.println("Es menor que 50");
} else if(num === 70) {
   System.out.println("Es igual a 70");
} else if(num === 80) {
   System.out.println("Es igual que 80");
} else {
   System.out.println("Ninguna de las condiciones anteriores");
}

// Estos son los mensajes que mostrar铆a por consola
// 'Es igual a 70'
```

Cuidado al concatear varias condiciones if seguidas. Comprobar谩 todas las condiciones hasta el final.

```java
int num = 70;
if(num < 50) {
   System.out.println("Es menor que 50");
}
if(num === 70) {
   System.out.println("Es igual a 30");
}
if(num === 80) {
   System.out.println("Es igual que 80");
} else {
   System.out.println("Ninguna de las condiciones anteriores");
}

// Estos son los mensajes que mostrar铆a por consola
// "Es igual a 70"
// "Ninguna de las condiciones anteriores"
```

Hay otra estructura que es switch case que permite hacer condiciones m煤ltiples.

```java
char opcion = 'b';
switch(opcion) {
   case 'a':
      System.out.println("Has elegido la opci贸n A");
   break;
   case 'b':
      System.out.println("Has elegido la opci贸n B");
   break;
   case 'c':
      System.out.println("Has elegido la opci贸n C");
   break;
   default:
      System.out.println("Lo lamentamos. O bien has indicado la opci贸n en may煤sculas o no est谩 disponible.");
   break;
}
```



----

馃枼锔? **Codificar**

> - Selecci贸n if
> - Selecci贸n if else
> - Selecci贸n switch case



### 4.2. Repetici贸n / Bucles

Permite un bloque de c贸digo se repita mientras se cumple una condici贸n. Si deja de cumplirse no se ejecuta el c贸digo y el programa sigue su curso.



#### 4.2.1. while

```java
int num = 2;

while(num > 0){
   num = num - 1;
}

System.out.println("Fin del bucle");
```

Vamos hacer una traza para entenderlo mejor:

- Declaramos y asignamos 2 a la variable `num`.
- Llegamos al `while`. La condici贸n es ver si num es mayor que 0.
- Al ser cierto se ejecuta el bloque de c贸digo que hay entre las llaves del `while`.
- Ejecutamos la linea `num = num - 1`. Ahora num vale 1.
- Llegamos al final de la llave y de nuevo nos vamos a la condici贸n del `while`
- Ahora `num` vale 1. La comprobaci贸n es `1 > 0`, esta sigue siendo verdadera.
- De nuevo es ejecutado el bloque de codigo del `while` y `num` cambia a valor 0.
- Esta vez `while`comprueba `0 > 0`. Por tanto no se cumple. Deja de ejecutarse el bloque de c贸digo que tiene el while.
- Finalmente el prograam sigue su cruso. Vemos por pantalla el mensaje 'Fin del bucle'



#### 4.2.2. do while

```java
int num = 2;

do{
   num --;
}while(num > 0);

System.out.println("Fin del bucle");
```

Funciona igual que el while, pero con una 煤nica diferencia. Primero se ejecuta el bloque de c贸digo y luego se comprueba condici贸n. Esto hace que el bucle se ejecute al menos 1 vez. Con while pod铆a pasar que nunca se ejecutase. Veamos este ejemplo.

```java
int num = 0;

while(num != 0) {
   System.out.println("Dentro de while");
}

do{
   System.out.println("Dentro de do while");
}while(num != 0)

```

Nunca mostrar谩 por pantalla el mensaje 'Dentro de while', mientras que el mensaje 'Dentro de do while' solo se ejecuta al principio 驴Por qu茅? do while comprueba la condici贸n al final.



#### 4.2.3. for

```java
int cont = 5;
int result = 0;

for(int i = 0; i<cont; i++) {
   result = result + i;
}

System.out.println("La suma de los 5 primeros numeros es " + result);
```

El for tiene una condiciones dividida en 3 partes separadas por ";"

- int i = 0 - Definimos y asignamos una variable. Solo podemos usarla dentro del bucle. Nos puede servir a modo de 铆ndice.
- i<cont - La condici贸n del bucle. Funciona de la misma forma que while. Si cumple la condici贸n sigue iterando.
- i++ - Una vez que termine de ejecutar el bloque de c贸digo, podemos operar con la variable que inicializamos antes. En este caso incrementamos su valor en 1.

Nos permite hacer bucles mucho m谩s controlados



#### 4.2.4. Saltos

驴Podemos dentro de un bucle parar o saltarnos la irteraci贸n? 隆claro que si! Te sorprender谩, pero muchos programadores senior no conocen esta utilidad de los bucles.

```java
// Vamos a sumar los 100 primeros n煤mero pares

int cont = 0;
int result = 0;

while(cont < 100) {
   cont ++;
   if(cont % 2 != 0) // si no es par pasamos a la siguiente iteraci贸n usando "continue"
      continue;
   result = result + cont;
}

System.out.println("La suma de los 100 primeros n煤mro pares es " + result);

```

```java
// Cuando la cantidad a sumar supere el 100 nos salimos del bucle

int cont = 0;
int result = 0;
while(true) { // itera de forma infinita, la condici贸n va a ser siempre verdadera
   cont ++;
   result = result + cont;
   if (result > 100)
      break;
}
System.out.println("La suma de los 100 primeros n煤mro pares es " + result);

```

馃枼锔? **Codificar**

> - Mostrar los 100 primeros n煤meros impares
> - Visualizar una cuenta atr谩s
> - La serie de Fibonacci



馃幉 **Ejercicios**

> - Test para comprobar conocmientos sobre el tema
