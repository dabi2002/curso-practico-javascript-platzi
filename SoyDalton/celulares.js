class Celulares {
    constructor(nombre, color, peso, rdp, rdc, ram){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = rdp;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram
    this.encendido = false;
}
    prender(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido == true;
        } else {
            alert("el celular se esta apagando")
            this.encendido = false
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("Celular reiniciando...");
            this.encendido == false;
        } else {
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`Grabando Video en ${this.resolucionDeCamara}`)
    }
    mostrarInfo(){
        return ` 
        Nombre: <b>${this.nombre}</b><br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño:<b>${this.resolucionDePantalla}</b><br>
        Resolucion de Camara: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram:<b>${this.memoriaRam}</b><br>
        `
    }
}

class CelularAltaGamma extends Celulares {
    constructor(nombre, color, peso, rdp, rdc, ram, rdce){
        super(nombre, color, peso, rdp, rdc, ram)
    this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Vamos a grabar un video en camara lenta")
    }
    reconocimientoFacial(){
        alert("Reconocimiento Facial en proceso")
    }
    mostrarInfoAltaGama(){
        return this.mostrarInfo() + `Resolucion de Camara: ${this.resolucionDeCamaraExtra}<br>`
    }
    }

// const celular1 = new Celulares("Celular N° 1", "Rojo", "150g", "5pulg", "full hd", "2GB" );
// const celular2 = new Celulares("Celular N° 2","Negro", "100g", "3pulg", "1920", "1GB" )
// const celular3 = new Celulares("Celular N° 3","Blanco", "120g", "5pulg", "480", "4GB" )

//celular1.prender();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.apagar();

const celular1 = new CelularAltaGamma("Celular N° 1", "Blanco", "130g", "5.6pulg", "4k full hd", "3GB", "full hd" );
const celular2 = new CelularAltaGamma("Celular N° 2","Negro", "136g", "5.2pulg", "4k", "4GB" ,"hd")

document.write(`
    
    ${celular1.mostrarInfo()}<br>

    ${celular2.mostrarInfo()}<br>

  ` )