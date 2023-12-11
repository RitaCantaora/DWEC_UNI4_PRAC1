//  la ventana se carga y se ejecuta la función inicioPagina
window.addEventListener('load', inicioPagina);

//clase que gestiona la colección de imágenes
class Galeria {

    // constructor Galeria recibe un número de imágenes (
    constructor(numPersonajes) {
        this.personajes = [];//array vacio
        this.cursor = 0;// imagen actual

//for que recorre el array de personajes 
        for (let i = 1; i <= numPersonajes; i++) {
            this.personajes.push('images/foto' + i + '.jpg');
        }
    }
//crea  una posición aleatoria con el random
    aleatoria() {
        this.cursor = Math.floor(Math.random() * this.personajes.length);
        return this.obtenerImagenActual();
    }
  //  Mueve el cursor a la última imagen recorre el array y -1
    ultima() {
        this.cursor = this.personajes.length - 1;
        return this.obtenerImagenActual();
    }
//Mueve el cursor a la primera imagen colocandos en el 0
    primera() {
        this.cursor = 0;
        return this.obtenerImagenActual();
    }
   // Avanza el cursor a la siguiente imagen recorrecomo array y ++
    siguiente() {
        if (this.cursor < this.personajes.length-1) this.cursor++;
        return this.obtenerImagenActual();
    }
//retrocede el cursor a la imagen anterior con --
    anterior() {
        if (this.cursor > 0) this.cursor--;
        return this.obtenerImagenActual();
    }

    // aleatoria() {
    //     this.cursor = Math.floor(Math.random() * this.personajes.length);
    //     return this.obtenerImagenActual();
    // }

    obtenerImagenActual(){
        return this.personajes[this.cursor];
    }
}
//objeto
// un objeto g de la clase Galeria con 7 imágenes
var g = new Galeria(7);

//funcion que llamar a los métodos correspondientes en el objeto g 
function actualizarFoto(foto) {

    //gestiona las clases CSS,#imagen,#primera...
    //en este caso es la primera 0
    document.querySelector('#imagen').style.backgroundImage = 'url('+foto+')';
    if (g.cursor == 0) {
        document.querySelector('#primera').classList.add('deshabilitado');
        document.querySelector('#anterior').classList.add('deshabilitado');
    }
    //ultima y siguiente -1
    if (g.cursor == g.personajes.length-1) {
        document.querySelector('#ultima').classList.add('deshabilitado');
        document.querySelector('#siguiente').classList.add('deshabilitado');
    }
    // habilitados los botones para ir a la primera  y anterior cuando no estamo en primera
    if (g.cursor != 0) {
        document.querySelector('#primera').classList.remove('deshabilitado');
        document.querySelector('#anterior').classList.remove('deshabilitado');
    }
       // habilitados los botones para ir a la última  y siguiente  cuando no estamo en última
    if (g.cursor != g.personajes.length-1) {
        document.querySelector('#ultima').classList.remove('deshabilitado');
        document.querySelector('#siguiente').classList.remove('deshabilitado');
    }
}


// Funciones para ir a la primera, última, siguiente y anterior...
function irAPrimera() {
    var foto = g.primera();
    actualizarFoto(foto);
}

function irAUltima() {
    var foto = g.ultima();
    actualizarFoto(foto);
}

function irASiguiente() {
    var foto = g.siguiente();
    actualizarFoto(foto);
}

function irAAnterior() {
    var foto = g.anterior();
    actualizarFoto(foto);
}

// Función que se ejecuta al cargar la página,para no ponerlo en cada uno así vale para todos
function inicioPagina() {
    //añadir event listeners a los botones de navegación
    document.querySelector('#primera').addEventListener('click', irAPrimera);
    document.querySelector('#ultima').addEventListener('click', irAUltima);
    document.querySelector('#siguiente').addEventListener('click', irASiguiente);
    document.querySelector('#anterior').addEventListener('click', irAAnterior);
    
    // Se elige una imagen aleatoria al cargar la página por primera vez
    var foto = g.aleatoria();
    actualizarFoto(foto);
}