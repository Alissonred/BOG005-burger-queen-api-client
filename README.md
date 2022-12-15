# Burger Queen (API Client)
<p align="center" width="100%">
    <img width="60%" src="/burguer-queen/src/img/logo.png">
</p>

## Índice


* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Prototipo ](#2-Prototipo)
* [3. Historias de ususario](#2-Historias-de-ususario)
* [4. Acceso a Burguer-Queen](#3Acceso-a-Burguer-Queen)


***

## 1. Resumen del proyecto
Burger Queen permite la administración de tu negocio de comida de manera fácil y rápido de acuerdo a las necesidades de crecimiento de tu negocio.
Como administrador puedes gestionar los datos de tus empleados y productos con un solo click. Adicionalmente, tus empleados podrán ejecutar sus labores de manera más eficiente. ¡Olvídate de las libretas para anotar tus pedidos y ordenes! … Con Burger Queen puedes crear, direccionar y monitorear tus procesos de producción, suministro y distribución.
Con perfiles activos para administradores, meseros y jefes de cocina, Burger Queen es permite centralizar la información y actualizarla en tiempo real para poder visualizar cada pedido desde cualquier lugar
¡Que esperas para transformar digitalmente tu negocio? Empieza ahora!

## 2. Protipo
#### Vista del mesero 
![diagrama-api](/burguer-queen/src/img/Copia%20de%20Verde%20Blanco%20Fot%C3%B3grafo%20Blogger%20Biolink%20Sitio%20Web%20(3).png)
#### Vista del jefe de cocina
![diagrama-api](/burguer-queen/src/img/Copia%20de%20Verde%20Blanco%20Fot%C3%B3grafo%20Blogger%20Biolink%20Sitio%20Web%20(4).png)
#### Vista del administrador
![diagrama-api](/burguer-queen/src/img/Ver%20lista%20de%20productos_%20Administrador.jpg)
![diagrama-api](/burguer-queen/src/img/Ver%20lista%20de%20productos_%20Administrador.png)


## 3. Historias de usuario

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Has testeado tu producto manualmente (validaciones de inputs).
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (usar API para guardar pedido).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó preparar el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 5] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

## 4. Acceso a Burguer-Queen

|Email| Password | Rol             |                |
|--------|----------------------------|:--------------------:|------------------|
|anita.borg@systers.xyz|123456|Administradora
|grace.hopper@systers.xyz|123456|Administradora

El administrador debe crear los usuarios correspondientes a los perfiles de chef y mesero.


