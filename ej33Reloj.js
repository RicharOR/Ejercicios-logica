/* Haz un reloj que en tiempo real vaya mostrando la hora cada segundo

Solo puedes usar el objeto date para conseguir la hora por primera vez, pero no para actualizar la hora

Ejemplo:
let miReloj = new Reloj()
mi_reloj.encender()

14:20:14
14:20:15
14:20:16

TODO: Cómo hacerlo:
-Crear una clase
-Inicializar propiedades con hora actual
-Método con setInterval
-Método para mostrar la hora
-Método para sumar segundos a la hora y actualizar hora, minutos y segundos
*/

class Reloj {
  constructor() {
    this.fecha = new Date()
    this.hora = this.fecha.getHours()
    this.minutos = this.fecha.getMinutes()
    this.segundos = this.fecha.getSeconds()
  }

  actualizar(segundos) {
    this.segundos += segundos

    if (this.segundos >= 60) {
      this.minutos++
      this.segundos = 0
    }

    if (this.minutos >= 60) {
      this.hora++
      this.minutos = 0
    }

    if (this.hora >= 24) {
      this.hora = 0
    }
  }

  mostrar() {
    this.actualizar(1)
    console.log(`${this.hora}:${this.minutos}:${this.segundos}`)
  }

  encender() {
    setInterval(() => {
      this.mostrar()
    }, 1000)
  }
}

let miReloj = new Reloj()
miReloj.encender()
