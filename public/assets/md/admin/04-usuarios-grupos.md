[TOC]

# Tema 04: Usuarios & Grupos



## 1. Introducci贸n

Vital manejar la creaci贸n de usuarios y grupos. Evita sustos y ayuda a la gesti贸n del sistema.

馃摉 **Usuario**

> Elemento del sistema para controlar la autenticaci贸n y autorizaci贸n, tanto del sistema como de sus recursos. Permite proporcionar un espacio a la persona que utiliza el sistema. Este espacio sirve para guardar opciones de customizaci贸n y configuraci贸n. Tambi茅n almacena programas, archivos y carpetas.

馃摉 **Grupo**

> Conjunto de usuarios. Permite gestionar la autorizaci贸n. En vez gestionar uno por uno cada recurso, asociarlos a un grupo. Luego seleccionamos que usuarios pertenecen al grupo.

馃摉 **Autenticaci贸n**

> Control de la entrada de un usuario al sistema. Una vez dentro podr谩 estar autorizado a unas acciones determinadas.

馃摉 **Autorizaci贸n**

> Control de acceso a recursos. Puede ser archivos, carpetas, programas o servicios del sistema. Tambi茅n se usa la palabra privilegios.



Estos conceptos no se dan solo en el mundo Linux, tambien en otros SO. Normalmente la autorizaci贸n se aplica sobre archivos y carpetas. Tambi茅n se da a nivel de programa, pero lo que ocurre es que ese programa tiene que acceder a recursos protegidos. Puede ser un archivo, carpeta o servicio. 

Entender la autenticaci贸n y autorizaci贸n es crucial, permite obtener seguridad y control:

- 馃敀 **Seguridad**: Puede verse comprometido un usuario por culpa de un atacante. Puede leer informaci贸n privada o alterarla. Si los privilegios del usuario son limitados el da帽o tambi茅n lo es.
- 馃懏 **Control**: No es ponerse en modo "orweliano". No significa monitorizar al usuario para castigarlo si crees que no est谩 trabajando o lo hace mal. Puede haber un error en el sistema y necesitemos saber cuando y d贸nde. Tal vez un atacante haya tomado el control de un usuario, decidiendo borrar ficheros. A trav茅s de logs de auditoria podemos analizar actividades. Solo acceder a ellos cuando haya un problema serio, no fetiche autoritario o cotilla. Incluso podr铆a ser ilegal.



## 2. Autorizaci贸n

### 2.1. Recursos

Sobre los recursos autorizamos acciones. Son de 2 tipos:

- **Archivos**: Con ellos autorizamos la lectura, modificaci贸n y ejecuci贸n.
- **Carpetas**: Con ellos autorizamos el acceso para ver sus ficheros y subcarpetas.

La ejecuci贸n de programas entrar铆a en los 2 casos anteriores. Normalmente un programa es un conjutno de archivos organizados en carpetas. Para ejecutarlo lo hacemos a trav茅s de su archivo principal. Este archivo esta sujeto a una autorizaci贸n. Puede que la carpeta donde est谩 el archivo necesite autorizaci贸n.

Los programas pueden ejecutarse por terminal o usar interfaz gr谩fica. En ambos casos es aplicable la situaci贸n anterior.



### 2.2. Permisos

En GNU/Linux los permisos se determinan a 3 entidades:

- **Owner - Due帽o**: El usuario considerado como due帽o del archivo.
- **Group - Grupo**: El grupo al que pertenece.
- **Other - Otro**: Se refiere al resto de grupos.

Para cada entidad se establece un tipo de permiso:

- <u>Lectura</u>
- <u>Escritura</u>
- <u>Ejecuci贸n</u>

Depende del usuario con el que autentiques y al grupo que pertenescas podr谩s hacer unas acciones u otras.



## 3. Grupos y Usuarios

### 3.1. Usuario "root"

Es el usuario con m谩s privilegios en GNU/Linux. Pertenece al grupo root y a otros tantos que sirven para gestionar recursos vitales. Puedes acceder a cualquier carpeta y hacer lo que quieras con los ficheros. Tambi帽en podemos ejecutar y configurar programas sin l铆mites. Es vital que exista para que GNU/Linux, de esta forma lograr la labor del SO de intermediario entre SW y HW. 

Lo recomendable es nunca usarlo. Puede que en el momento de utilizarlo el sistema sea v铆ctima de un ataque. Aprovechan la situaci贸n y toma el control. Tambi茅n ignorar las consecuencias y borrar ciertos recursos o cambiar configuraciones. Podr铆a inutilizarse todo el sistema.

Para acceder a root desde la consola de comandos hacemos `sudo su`. Solo puede ejecutarlo los super-usuarios. El comando permite en la terminal estar logeado como root.

驴No puedo ser root pero me dan el comando `sudo su`? Esto es como los cheats en las consolas de los 90. Unas combinaciones en el mando permit铆a obtener vidas infinitas, selecci贸n de niveles, meter gr谩ficos nuevos, oro infinito... A veces los desarrolladores crean atajos para hacer pruebas. En el caso de las consolas es por hacer una gracia, pero imaginate que formas parte del desarrollo GNU/Linux. Tal vez en un entorno controlado necesites root porque tu misi贸n es hacer una mejora en la gesti贸n de procesos. Puede que simplemente seas un curioso y quieras aprender. Linux no trata a los usuarios como ni帽os, tu estableces los l铆mites. Para lo que hacen el 90% de los usuarios no es necesario root, pero tal vez alguien lo necesite.



### 3.2. Superusuario

Pertenecen al grupo root. Tienen bastantes privilegios pero no los m谩s cr铆ticos, para eso est谩 root. Este tipo de usuarios est谩n pensados para profesionales. No hacen un uso casual del sistema: leer correos, escribir documentos, navegar, Facebook, ver videos... Necesitan hacer uso de todos los comandos de terminal y acceder a archivos importante del sistema.

鈿狅笍 **Sudoers**

> Hay bastante confusi贸n con este termino. Primero definamos que es el comando sudo. Se antepone delante de comandos de terminal parapoderlo ejecutar. Normalmente los 煤nicos que le sest谩n permitidas estas operacioens son los super-usuarios, es decir, los que est谩n en el grupo "root". De ah铆 que digan que los super-usuarios son sudoers. Pero no siempre es as铆, el fichero /etc/sudoers establece quienes ejecutan sudo. Puedes establecer otros usuarios si ves conveniente.



### 3.3. Usuarios Normales

Como hemos indicado sus tareas son triviales. No necesitan altos privilegios.



## 4. Archivos de Configuraci贸n

驴D贸nde se almacena esta informaci贸n de usuarios y grupos? 

#### /etc/passwd

Almacena la informaci贸n de todos los usuarios del sistema. El nombre confunde pensando que solo guarda contrase帽as. Cada usuario es una linea con la informaci贸n delimitada por ":". Siguiendo el orden cada segmento es lo siguiente:

1. <u>nombre de usuario</u>
2. <u>contrase帽a</u>: Lo normal es que aparezca una x. De ser as铆 la contrase帽a se guarda cifrada en el fichero /etc/shadow
3. <u>uid</u>: Identificador num茅rico 煤nico.
4. <u>gid</u>: Grupo principal al que pertenece. Auqnue no aparezca, tambi茅n peude pertenecer a m谩s grupos.
5. <u>carpeta</u>:  Path de la carpeta de usuario
6. <u>shell</u>: Terminal a utilizar. Incluso podemos establecer una terminal limitada, o simplemente que no la usen.

#### /etc/group

Almacena informaci贸n de todos los grupos del sistema. Al igual que los usuarios, contiene una linea por inforaci贸n de cada grupo. Cada una tiene segmentos delimitados por :. Siguiendo el orden significa lo siguiente:

1. <u>Nombre de grupo</u>
2. <u>Contrase帽a de grupo</u>: Es opcional. Con ella pueden usuarios ajenos unirse al grupo.
3. <u>ID de grupo</u>: Identificador num茅rico 煤nico.
4. <u>Miembros del grupo</u>: Lista de nombres de usuarios de sus miembros.

#### /etc/login.defs

Para configurar diversos aspectos de los usuarios. Para ello se usan unas variables:

- <u>PAS_MAX_DAYS</u>: N煤mero de d铆as que una contrase帽a es v谩lida.
- <u>PASS_MIN_LEN</u>: N煤mero m铆nimo de carateres de la contrase帽a.
- <u>CREATE_HOME</u>: Flag que indica si al crear el usuario se crea su directorio en `/home`



猸? **grep + cut**

> Vimos en la unidad "03 - Archivos" como usar los comandos `grep` y `cut`. Incluso el ejemplo era sobre 茅stos ficheros. Para obtener una lista de nombres de usuario ejecutamos lo siguiente:
>
> ```bash
> sudo cat /etc/passwd | cut -d ":" -f1 
> ```



猸? **Modificar Archivos**

> Podemos cambiar la configuraci贸n escribiendo en los archivos. No es recomendable, ya que un leve error de sintaxis puede hacer que no inicie el sistema. Para ello tenemos una serie de comandos de terminal. Es m谩s c贸modo y seguro.



## 5. Comandos

**sudo**

> Los siguientes comandos solo pueden ser ejecutados por super-usuarios. Para ello anteponemos el comando `sudo`. Comprobar谩 si el usuario actual es un super-usuario y pedir谩 la contrase帽a. Cuando introduces la contrase帽a la primera vez, no la vuelve a pedir las siguienets veces. Pero si cierras el terminal y lo vuelves abrir vuelve a pedirlo.



### 5.1. Usuario

#### login

Aunque hayamos entrado en la distro con un usuario, podemos dentro de una terminal logearnos con otro usuario. Incluso tener varios terminales con distintos usuarios. Imagina que eres un admin y quieres logearte en el terminal como Pablo3000

```bash
sudo login Pablo3000
```



#### useradd

Para crear usuarios. Podemos a帽adir las siguientes opciones:

- `-c`: A帽adir comentario.
- `-d`: Especificar otro directorio de usuario.
- `-e`: Fecha de expiraci贸n de la cuenta. Tiene el formato AAAA-MM-DD.
- `-g`: Identificador del grupo principal de usuario.
- `-s`: Indicar un terminal distinto.

```bash
sudo useradd powerman -c "Un macho Ib茅rico en peligro de extinci贸n"
```



#### passwd

Establecer el password de un usuario. Por pantalla nos indicar谩 cuando introducir la contrase帽a

```bash
sudo passwd powerman
```



#### userdel

Eliminar el usuario

```bash
sudo userdel powerman
```



#### usermod

Modificar usuarios. Tenemos las siguientes opciones:

- `-c`: A帽adir comentario.
- `-d`: Especificar otro directorio de usuario.
- `-e`: Fecha de expiraci贸n de la cuenta. Tiene el formato AAAA-MM-DD.
- `-g`: Cambiar el identificador de su grupo principal.
- `-G`: A帽ade otros identificadores de grupo.
- `-l`: Cambia el nombre de usuario.
- `-L`: Bloquea la cuenta de usuario.
- `-U`: Desbloquea la cuenta.
- `-s`: Establecer otro terminal.

```bash
sudo usermod powerman -l powerwoman
```



### 5.2. Grupos

#### groupadd

Crear grupos.

```bash
sudo groupadd nuevogrupo 
```



#### groupmod

Podemos cambiar el nombre del grupo

```bash
sudo groupmod -n viejogrupo nuevogrupo
```



#### groupdel

Eliminar el grupo

```bash
sudo groupdel borrargrupo
```



### 5.3. Permisos

Cambiar los permisos del fichero o carpeta. Podemos hacerlo de 2 formas. 



#### chown

Cambiar el due帽o o grupo de un archivo o carpeta. No olvidar colocar `:` delante del grupo a cambiar.

Imagina que tenemos al usuario "marta2000" y el grupo "pizza". Queremos cambiar el duse帽o y el grupo al recurso "almeja.txt".

```bash
sudo chown marta2000 almeja.txt
sudo chown :pizza almeja.txt
```

Podemos hacer la opci贸n de una sola vez

```bash
sudo chown marta2000:pizza almeja.txt
```



#### chmod xxx

A trav茅s de un n煤mero de 3 cifras, correspondiendo cada una al owner, group y others respecticamente. Esta cifra es un n煤mero de 1 al 7 驴por qu茅? veamoslo en el diagrama.

<table>
    <tr>
        <th style="text-align: center">owner</th>
        <th style="text-align: center">group</th>
        <th style="text-align: center">others</th>
    </tr>
    <tr>
    	<td>
    		<table>
    			<tr>
                    <th style="text-align: center">r</th>
                    <th style="text-align: center">w</th>
                    <th style="text-align: center">x</th>
                </tr>
                <tr>
                    <td style="text-align: center">1</td>
                    <td style="text-align: center">1</td>
                    <td style="text-align: center">1</td>
                </tr>
            </table>
    	</td>
    	<td>
    		<table>
    			<tr>
                    <th style="text-align: center">r</th>
                    <th style="text-align: center">w</th>
                    <th style="text-align: center">x</th>
                </tr>
                <tr>
                    <td  style="text-align: center">1</td>
                    <td  style="text-align: center">0</td>
                    <td  style="text-align: center">0</td>
                </tr>
            </table>
    	</td>
    	<td>
    		<table>
    			<tr>
                    <th style="text-align: center">r</th>
                    <th style="text-align: center">w</th>
                    <th style="text-align: center">x</th>
                </tr>
                <tr>
                    <td  style="text-align: center">0</td>
                    <td  style="text-align: center">0</td>
                    <td  style="text-align: center">0</td>
                </tr>
            </table>
    	</td>
    </tr>
    <tr>
    	<td  style="text-align: center">7</td>
    	<td  style="text-align: center">6</td>
    	<td  style="text-align: center">0</td>
    </tr>
</table>
```bash
sudo chmod 760 ./pantoja.txt
```

Cada entidad puede tener permisos de escritura, lectura o ejecuci贸n. Son representados por las letras `r`, `w` y `x` respectivamente (read, write, execution). El `1` indica si tiene el permiso, el `0` si no lo tiene. Las 3 cifras juntas conforman un n煤mero binario. Este n煤mero se traduce a decimal para determinar los permisos. La cifra solo puede ser del `0` al `7`. Por tanto el rango de permisos es del `000` hasta el `777`. 



#### chmod +-

Dependiendo de la entidad, el permiso y su operaci贸n usamos un flag u otro.

<u>Entidades</u>:

- `u`: Owner.
- `g`: Group.
- `o`: Others.
- `a`: Referirse al owner, group y others.

<u>Permiso</u>:

- `r`: Lectura.

- `w`: Escritura.
- `x`: Ejecui贸n.

<u>Operaci贸n</u>:

- `-`: Quitar un permiso.
- `+`: A帽adir permiso.
- `=`: Los permisos sean exactamente los indicados.

Seguiendo el ejemplo del aparatdo anterior hariamos lo siguiente.

```bash
sudo chmod u=rwx ./pantoja.txt
sudo chmod g=r ./pantoja.txt
sudo chmod o= ./pantoja.txt
```

Una alternativa m谩s compacta.

```bash
sudo chmod u=rwx,g=r,o= ./pantoja.txt
```

Imagina que queremos ser menos restrictivos. Al `group` otorgamos escritura y a `others` lectura.

```bash
sudo chmod g+w, o+r ./pantoja.txt
```

Finalmente nos arrepentimos que others tenga lectura

```bash
sudo chmod o-r ./pantoja.txt
```



#### -R

Hemos visto que otorgamos permisos a ficheros 驴y las carpetas?

```bash
sudo chmod 760 ./pantojaFolder
sudo chmod 760 -R ./pantojaFolder
```

驴Que es la opci贸n -R? De la primera forma solo cambiamos los eprmisos de la carpeta. Con -R damos permiso a la carpeta y a todos sus archivos y subcarpetas.



猸? **驴Qu茅 es mejor?**

> Usar chmod con n煤meros o con opciones depender谩 de tu experiencia. Es muy compacto e inmediato esribir un n煤mero de 3 cifras. Sin embargo, si solo quieres cambiar el permiso de una entidad es m谩s c贸modo las opciones. Tu decides, no hay respuesta correcta. 



## 6. Consejos

Estos consejos son fruto de la experiencia y otro saber compartido por la comunidad. Son recomendaciones que ayudan a evitar sustos y facilitar la gesti贸n. Puedes seguirlos o no, es decisi贸n tuya. 

En muchas ocasiones se prefiere hacerlo. De esta forma facilitas la comunicaci贸n con otros compa帽eros. Tambi茅n hay situaciones donde se abandona el puesto de trabajo, relegando el trabajo a un nuevo administrador. Es m谩s f谩cil para 茅ste aprender el nuevo sistema ya que est谩 acostumbrado a las recomendaciones. Lo ideal es entender el por qu茅, ya que seguirlas sin razonar significa que no las entiendes 

Tambi茅n tenemos que analizar la situaci贸n. Hay empresas o centros donde se establece su propia pol铆tica de seguridad, incluso no cumpliendo dichas recomendaciones. Las necesidades cambian dependiendo del lugar. Al final es sentido com煤n y adaptarse a la situaci贸n.

- Las contrase帽as tiene que ser de un m铆nimo de 8 caract茅res. Han de contener min煤sulas, may煤sulas, n煤meros y s铆mbolos. debend e aparecer intercalado.
- Es mejor que sea el administrador quien proporcione las contrase帽as. A trav茅s de ingenier铆a social podemos sonsacar la contrase帽a de un usuario. El administrador usar谩 un generador aleatorio para que no sea deducible.
- La cuenta root no se toca.
- Normalmente cuando instalamos una distro generamos un super-usuario.  Tampoco lo tocamos a no ser que administremos el sistema con 茅l.
- Dependiendo del uso del equipo creamos las siguientes cuentas:
  - Casual: Un oficinista promedio. Un usuario que no sea super-usuario. Ponerles un terminal restringido o quit谩rselo. Establecer que permisos tiene sobre determinados recursos.
  - Profesional: Programadores, dise帽adores u otros administradores. Necesitan libertad, por tanto ser superusuario. A trav茅s de la terminal realizan una gran cantidad de tareas. 
  - Invitado: Imagina que una persona necesita el sistema de forma temporal. Tal enviar un correo, ver noticias, escribir una carta, ver videos, jugar... ser铆a igual que un usuario casual.
- Realizar grupos por recursos. Por ejemplo un grupo para utilizar una impresora o un conjunto de programas. Vamos incluyendo a los usuarios idoneos.



---



## 馃幉 Ejercicios

- [Test de Repaso 01](https://pregunta2.com/quiz/c9b6f805)
- Vamos a hacer una serie de operaciones con el terminal. Todos los comandos que uses los guardar谩s en documento .txt para entregarlo. El ejercicio consiste en realizar los siguientes pasos:

  - Crea un un usuario normal llamado "Perico".
  - Crea un super usuario llamado "Super-perico". Recuerda que puedes indicar el grupo al crear el usuario o despu茅s con otro comando.
  - Obten por terminal los grupos al que pertenecen "Perico" y "Super-perico". Recuerda que est谩n en fichero del sistema. Tampoco olvides que tenemos comandos como cat, grep o cut.
  - Crea una carpeta llamada "test".
  - Pon como due帽o de la carpeta creada "Perico".
  - Modifica los permisos para que Perico sea el 煤nico que pueda leer, escribir y ejecutar.
  - Logeate con Super-perico en la terminal.
  - Bloquea al usuario Perico.
  - Intenta logearte con Perico 驴puedes hacerlo?.




## 馃摃 Bibliograf铆a

- Administraci贸n de usuarios
  https://www.linuxtotal.com.mx/index.php?cont=info_admon_008
  
- C贸mo limitar el acceso a usuarios en Linux
  https://www.ochobitshacenunbyte.com/2021/01/25/como-limitar-el-acceso-a-usuarios-en-linux/

- Comandos Linux para la Gesti贸n de Grupos

  https://laguialinux.es/comandos-linux-para-gestion-de-grupos/

- C贸mo cambiar permisos y propietarios en Linux trav茅s de la l铆nea de comandos
  https://www.hostinger.es/tutoriales/cambiar-permisos-y-propietarios-linux-linea-de-comandos/

